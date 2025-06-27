import React from "react";

const TeamMemberCard = ({ name, role, status }) => {
  return (
    <div className="border rounded-xl p-4 shadow bg-white dark:bg-gray-900">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
          status === "Online"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
};

export default TeamMemberCard;
