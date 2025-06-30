// src/TeamDashboard.jsx
import React from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TeamList from "../components/TeamList";
import sampleTeams from "../data/sampleTeams";
import demoProjects from "../data/sampleProjects";
import { AIProjectCard } from "../components/AIProjectCard";

export default function TeamDashboard() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        {/* Projects grid */}
        <h1 className="text-3xl font-bold">AI Team Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <AIProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tasks & Teams side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskList tasks={demoTasks} />
          <TeamList teams={sampleTeams} />
        </div>
      </main>
    </>
  );
}

