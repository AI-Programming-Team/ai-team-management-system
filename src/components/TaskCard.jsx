import React from "react";

const TaskCard = ({ title, description, status }) => {
  return (
    <div className="border rounded-xl p-4 bg-white shadow dark:bg-gray-800">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-2">
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            status === "Completed"
              ? "bg-green-200 text-green-800"
              : status === "In Progress"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
