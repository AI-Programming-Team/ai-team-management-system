// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded ${className}`}
    >
      {children}
    </button>
  );
}
