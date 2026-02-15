import React, { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 2; // increase gradually
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
      
      <h1 className="text-orange-500 text-xl tracking-widest mb-8 animate-pulse">
        INITIALIZING SYSTEM
      </h1>

      <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-gray-400">
        {Math.min(progress, 100)}%
      </p>
    </div>
  );
}
