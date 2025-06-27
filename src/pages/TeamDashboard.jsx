import React from "react";
import AIProjectCard from "../components/AIProjectCard";
import TaskList from "../components/TaskList";

const demoProjects = [
  {
    teamName: "AI Dev Team",
    projectName: "Financial App",
    status: "In Progress",
    lead: "GPT Dev #1",
    description: "Building a budgeting system with real-time analytics.",
  },
  {
    teamName: "AI Marketing Team",
    projectName: "Launch Campaign",
    status: "Planning",
    lead: "GPT Marketer #3",
    description: "Preparing multi-channel rollout for app release.",
  },
];

const demoTasks = [
  {
    title: "Create Login UI",
    description: "Design and implement login form with Tailwind.",
  },
  {
    title: "Setup Firebase",
    description: "Initialize project with Firebase for backend support.",
  },
];

const TeamDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Team Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demoProjects.map((project, index) => (
          <AIProjectCard key={index} {...project} />
        ))}
      </div>

      <TaskList tasks={demoTasks} />
    </div>
  );
};

export default TeamDashboard;
