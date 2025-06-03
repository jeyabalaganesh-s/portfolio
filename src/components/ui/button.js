import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyles = "px-4 py-2 rounded-xl font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
