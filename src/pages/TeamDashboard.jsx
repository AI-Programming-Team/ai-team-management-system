// src/pages/TeamDashboard.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import sampleTasks from "../data/sampleTasks";
import demoProjects from "../data/sampleProjects";
import sampleTeams from "../data/sampleTeams";
import TaskList from "../components/TaskList";
import TeamList from "../components/TeamList";
import TaskModal from "../components/TaskModal";
import AIProjectCard from "../components/AIProjectCard";

export default function TeamDashboard() {
  // ── Modal state ──────────────────────────────────────────────────────────────
  // Holds the task object that’s been clicked. null = modal closed.
  const [selectedTask, setSelectedTask] = useState(null);

  // Close handler simply clears the selection
  const closeModal = () => setSelectedTask(null);

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        <h1 className="text-3xl font-bold">AI Team Dashboard</h1>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <AIProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Tasks & Teams side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TaskList
            tasks={sampleTasks}
            onTaskClick={(task) => setSelectedTask(task)}
            onAddTask={() =>
              setSelectedTask({
                id: null,
                title: "",
                description: "",
                status: "",
                assignedTo: "",
                dueDate: "",
              })
            }
          />
          <TeamList teams={sampleTeams} />
        </div>
      </main>

      {/* Render the TaskModal when a task is selected */}
      {selectedTask && (
        <TaskModal
          isOpen={true}
          onClose={closeModal}
          task={selectedTask}
        />
      )}
    </>
  );
}
