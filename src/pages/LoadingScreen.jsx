import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish();
        }, 400);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      {/* TITLE */}
      <h1 className="text-white text-lg tracking-[0.4em] uppercase mb-16">
        Booting Portfolio
      </h1>

      {/* CIRCLE WRAPPER */}
      <div className="relative flex items-center justify-center">

        {/* OUTER SPIN RING */}
        <div className="w-40 h-40 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />

        {/* INNER STATIC RING */}
        <div className="absolute w-32 h-32 rounded-full border border-white/20" />

        {/* PERCENTAGE CENTER */}
        <div className="absolute text-center">
          <p className="text-3xl font-bold text-orange-500">
            {Math.min(progress, 100)}%
          </p>
          <p className="text-xs text-white/60 tracking-widest mt-2">
            LOADING
          </p>
        </div>

      </div>

      {/* SUBTEXT */}
      <p className="text-white/40 text-sm mt-16 tracking-widest">
        Preparing Experience...
      </p>

    </div>
  );
}