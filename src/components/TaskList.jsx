// src/components/TaskList.jsx
import React from "react";

const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks assigned.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-100 p-3 rounded-lg border border-gray-200 hover:bg-gray-200 cursor-pointer"
              onClick={() => onTaskClick(task)}
            >
              <strong>{task.title}</strong>
              <p className="text-sm text-gray-600">{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
