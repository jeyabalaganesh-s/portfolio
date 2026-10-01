import cv2
import os
import numpy as np

VIDEO = "public/character.mp4"
OUTPUT = "public/frames"

FRAME_COUNT = 64

os.makedirs(OUTPUT, exist_ok=True)

cap = cv2.VideoCapture(VIDEO)

if not cap.isOpened():
    raise RuntimeError(f"Could not open {VIDEO}")

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS)
duration = total_frames / fps if fps else 0

print(f"Total frames : {total_frames}")
print(f"FPS          : {fps}")
print(f"Duration     : {duration:.2f}s")

# ---------------------------------------------------------
# Read all frames
# ---------------------------------------------------------

frames = []

for i in range(total_frames):
    ret, frame = cap.read()

    if not ret:
        break

    frames.append(frame)

cap.release()

if not frames:
    raise RuntimeError("No frames found.")

print(f"Loaded frames: {len(frames)}")

# ---------------------------------------------------------
# Detect background color
# Uses the four corners of the first frame
# ---------------------------------------------------------

sample = frames[0]

corners = np.array([
    sample[5, 5],
    sample[5, -6],
    sample[-6, 5],
    sample[-6, -6],
])

background_bgr = np.median(corners, axis=0).astype(np.uint8)

b, g, r = background_bgr

background_hex = f"#{r:02X}{g:02X}{b:02X}"

print()
print("Detected background:")
print(f"RGB: ({r}, {g}, {b})")
print(f"HEX: {background_hex}")

with open("public/character-background.txt", "w") as f:
    f.write(background_hex)

# ---------------------------------------------------------
# Determine source frame mapping
#
# We assume the video contains a circular sequence
# followed by a neutral center frame.
#
# 8 directions:
#
# 0   UP
# 45  UP-RIGHT
# 90  RIGHT
# 135 DOWN-RIGHT
# 180 DOWN
# 225 DOWN-LEFT
# 270 LEFT
# 315 UP-LEFT
# ---------------------------------------------------------

# If the video has exactly 9 key poses, manually adjust these
# indices after inspecting the generated contact sheet.

direction_positions = [
    ("up", 0),
    ("up-right", 1),
    ("right", 2),
    ("down-right", 3),
    ("down", 4),
    ("down-left", 5),
    ("left", 6),
    ("up-left", 7),
]

# ---------------------------------------------------------
# Save a quick diagnostic contact sheet
# ---------------------------------------------------------

thumbs = []

for name, index in direction_positions:
    index = min(index, len(frames) - 1)

    frame = frames[index]
    thumb = cv2.resize(frame, (320, 180))

    cv2.putText(
        thumb,
        name,
        (10, 30),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.8,
        (255, 255, 255),
        2,
        cv2.LINE_AA,
    )

    thumbs.append(thumb)

rows = []

for i in range(0, len(thumbs), 4):
    row = thumbs[i:i + 4]

    while len(row) < 4:
        row.append(np.zeros_like(thumbs[0]))

    rows.append(np.hstack(row))

sheet = np.vstack(rows)

cv2.imwrite("public/character-contact-sheet.jpg", sheet)

print()
print("Created:")
print("public/character-contact-sheet.jpg")

# ---------------------------------------------------------
# Create 64 evenly spaced frames around the trajectory
# ---------------------------------------------------------

# The directional sequence occupies the first 8 pose frames.
# We interpolate the source timeline around the circular path.

usable_count = len(frames)

for i in range(FRAME_COUNT):

    # Circularly distribute frames across the source video.
    source_index = round(
        (i / FRAME_COUNT) * usable_count
    ) % usable_count

    frame = frames[source_index]

    output = os.path.join(
        OUTPUT,
        f"{i:02d}.webp"
    )

    cv2.imwrite(
        output,
        frame,
        [
            cv2.IMWRITE_WEBP_QUALITY,
            95,
        ],
    )

    print(
        f"{i:02d} -> source frame {source_index}"
    )

# ---------------------------------------------------------
# Center frame
#
# The final source frame is assumed to be neutral.
# ---------------------------------------------------------

center = frames[-1]

cv2.imwrite(
    "public/frames/center.webp",
    center,
    [
        cv2.IMWRITE_WEBP_QUALITY,
        98,
    ],
)

print()
print("Created center.webp")
print()
print("Extraction complete.")