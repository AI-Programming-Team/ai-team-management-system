// src/components/ui/Progress.jsx
import React from "react";

export default function Progress({ value = 0, max = 100, className = "" }) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={"w-full bg-gray-200 rounded h-2 " + className}>
      <div
        className="h-full bg-green-500 rounded"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
