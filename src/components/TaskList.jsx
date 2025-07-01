import React from "react";
import { Button } from "./ui/Button";

const TaskList = ({ tasks, onTaskClick, onAddTask }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full">
      {/* header with title + Add Task button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <Button onClick={onAddTask}>Add Task</Button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks assigned.</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => onTaskClick(task)}
              className="bg-gray-100 p-3 rounded-lg border border-gray-200 hover:bg-gray-200 cursor-pointer"
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
