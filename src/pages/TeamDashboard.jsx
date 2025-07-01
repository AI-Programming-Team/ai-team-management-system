// src/TeamDashboard.jsx
import React from "react";
import React, { useState } from "react";
import demoTasks from "../data/sampleTasks";  // Import the sample tasks data
import TaskList from "../components/TaskList";
import TeamList from "../components/TeamList";
import sampleTeams from "../data/sampleTeams";
import demoProjects from "../data/sampleProjects";
import sampleTasks from "../data/sampleTasks";      // ← import sample tasks
import TaskModal from "../components/TaskModal";     // ← import our modal
import { AIProjectCard } from "../components/AIProjectCard";

export default function TeamDashboard() {
  // task state & modal state
  const [tasks, setTasks] = useState(sampleTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // called when modal “Create” clicked
  const handleCreate = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: Date.now().toString() },
    ]);
    setModalOpen(false);
  };

  return (
    <>
      <Header>
        <button
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => {
            setEditingTask(null);
            setModalOpen(true);
          }}
        >
          New Task
        </button>
       </Header>
       
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
          <TaskList tasks={tasks} />
          <TeamList teams={sampleTeams} />
        </div>
      </main>
   
      {/* Our TaskModal */}
      <TaskModal
        isOpen={modalOpen}
        onOpenChange={() => setModalOpen(false)}
        onSubmit={handleCreate}
        task={editingTask}
      />
     </>
   );
 }

