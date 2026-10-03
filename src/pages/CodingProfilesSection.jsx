import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Code2,
  Database,
  ExternalLink,
} from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    description: "Projects, source code, and development work",
    username: "@jeyabalaganesh-s",
    url: "https://github.com/jeyabalaganesh-s",
    icon: Github,
  },
  {
    name: "LeetCode",
    description: "Problem solving, algorithms, and DSA practice",
    username: "@jeyabalaganesh-s",
    url: "https://leetcode.com/u/jeyabalaganesh-s/",
    icon: Code2,
  },
  {
    name: "Kaggle",
    description: "AI, machine learning, datasets, and notebooks",
    username: "@jeyabalaganesh",
    url: "https://www.kaggle.com/jeyabalaganesh",
    icon: Database,
  },
  {
    name: "LinkedIn",
    description: "Professional experience and career profile",
    username: "Jeyabala Ganesh",
    url: "https://www.linkedin.com/in/jeyabalaganesh-s/",
    icon: Linkedin,
  },
];

export default function CodingProfilesSection() {
  return (
    <section
      id="profiles"
      className="relative bg-black py-28 px-6 overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]
        [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.4em] text-white/40 uppercase mb-4">
            Developer Profiles
          </h2>

          <h3 className="text-5xl font-bold text-white leading-tight">
            Coding & Professional Profiles
          </h3>

          <p className="text-white/60 mt-6 text-lg">
            Explore my development work, coding practice, AI learning,
            and professional journey.
          </p>

          <div className="h-[2px] w-24 bg-orange-500 mt-8" />
        </motion.div>

        {/* Profile Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;

            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-7 rounded-xl
                border border-white/10
                bg-white/[0.03]
                hover:border-orange-500/50
                transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.12,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 mb-7
                  flex items-center justify-center
                  rounded-xl
                  border border-orange-500/30
                  bg-orange-500/[0.05]
                  group-hover:border-orange-500
                  group-hover:bg-orange-500/10
                  transition-all duration-300"
                >
                  <Icon
                    className="w-7 h-7 text-orange-500
                    group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Name */}
                <h4 className="text-xl font-semibold text-white mb-2">
                  {profile.name}
                </h4>

                {/* Username */}
                <p className="text-orange-500 text-sm mb-4">
                  {profile.username}
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed mb-7">
                  {profile.description}
                </p>

                {/* Link */}
                <div
                  className="flex items-center gap-2
                  text-sm font-medium text-white/70
                  group-hover:text-orange-400 transition-colors"
                >
                  View Profile

                  <ExternalLink
                    className="w-4 h-4
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform duration-300"
                  />
                </div>

                {/* Bottom Accent */}
                <div
                  className="absolute bottom-0 left-7 right-7
                  h-[1px] bg-orange-500
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left"
                />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}