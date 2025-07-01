// src/pages/TeamDashboard.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TeamList from "../components/TeamList";
import sampleTeams from "../data/sampleTeams";
import sampleProjects from "../data/sampleProjects";
import sampleTasks from "../data/sampleTasks";      // ← correct import name
import TaskModal from "../components/TaskModal";
import Button from "../components/ui/Button";
import AIProjectCard from "../components/AIProjectCard";

export default function TeamDashboard() {
  // initialize state with the imported sampleTasks
  const [tasks, setTasks] = useState(sampleTasks);
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        <h1 className="text-3xl font-bold">AI Team Dashboard</h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((project) => (
            <AIProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tasks & Teams side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-between items-center mb-4 col-span-2 md:col-span-1">
      <h2 className="text-2xl font-semibold">Tasks</h2>
      <Button onClick={() => alert("Add Task clicked!")}>
        + New Task
      </Button>
    </div>
          <TaskList tasks={tasks} onTaskClick={setSelectedTask} />
          <TeamList teams={sampleTeams} />
        </div>

        {/* Modal for task details */}
        {selectedTask && (
          <TaskModal
            isOpen={true}
            onClose={() => setSelectedTask(null)}
            task={selectedTask}
          />
        )}
      </main>
    </>
  );
}
