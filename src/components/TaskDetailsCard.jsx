import React from "react";

const TaskCard = ({ task }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "In Progress":
        return "orange";
      case "Pending":
      default:
        return "gray";
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px 15px",
        marginBottom: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h4 style={{ marginBottom: "5px" }}>{task.title}</h4>
      <p style={{ fontSize: "0.9em", color: "#555" }}>{task.description}</p>
      <span
        style={{
          padding: "4px 8px",
          fontSize: "0.75em",
          borderRadius: "5px",
          color: "#fff",
          backgroundColor: getStatusColor(task.status),
        }}
      >
        {task.status}
      </span>
    </div>
  );
};

export default TaskCard;
