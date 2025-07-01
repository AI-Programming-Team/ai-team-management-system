// src/components/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={
        "p-4 bg-white border border-gray-200 rounded shadow-sm " + className
      }
    >
      {children}
    </div>
  );
}
