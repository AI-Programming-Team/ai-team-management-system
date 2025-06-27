import React from "react";

const AIProjectCard = ({ teamName, projectName, status, lead, description }) => {
  return (
    <div className="border rounded-2xl shadow p-4 bg-white space-y-2">
      <h2 className="text-xl font-semibold">{projectName}</h2>
      <p className="text-gray-600 text-sm">Team: {teamName}</p>
      <p className="text-gray-600 text-sm">Lead: {lead}</p>
      <p className="text-gray-500">{description}</p>
      <span
        className={`inline-block px-3 py-1 text-sm rounded-full ${
          status === "In Progress"
            ? "bg-yellow-200 text-yellow-800"
            : status === "Completed"
            ? "bg-green-200 text-green-800"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default AIProjectCard;
