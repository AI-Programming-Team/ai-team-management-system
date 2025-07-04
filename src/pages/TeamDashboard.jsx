// src/pages/TeamDashboard.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import sampleTasks from "../data/sampleTasks";
import demoProjects from "../data/sampleProjects";
import sampleTeams from "../data/sampleTeams";
import TaskList from "../components/TaskList";
import TeamList from "../components/TeamList";
import TaskModal from "../components/TaskModal";
import AIProjectCard from "../components/AIProjectCard";
import AIChat from "../components/AIChat";
import Toast from "../components/Toast";
import usePersistedState from "../Hooks/usePersistedState";

export default function TeamDashboard({ user, onLogout }) {
  // ── Modal state ──────────────────────────────────────────────────────────────
  // Holds the task object that’s been clicked. null = modal closed.
  const [tasks, setTasks] = usePersistedState("tasks", sampleTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const teamLeads = sampleTeams.map((t) => t.lead);
  const [toast, setToast] = useState("");

  const saveTask = (updatedTask) => {
    setTasks((prev) => {
      if (updatedTask.id) {
        return prev.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      }
      const nextId = prev.reduce((max, t) => Math.max(max, t.id), 0) + 1;
      return [...prev, { ...updatedTask, id: nextId }];
    });
     if (updatedTask.assignedTo === user?.name) {
      setToast(`New task assigned: ${updatedTask.title}`);
    } else {
      setToast("Task saved");
    }
  };

  // Close handler simply clears the selection
  const closeModal = () => setSelectedTask(null);

  useEffect(() => {
    const upcoming = tasks.find((t) => {
      const diff = new Date(t.dueDate) - new Date();
      return diff > 0 && diff < 86400000;
    });
    if (upcoming) {
      setToast(`Task "${upcoming.title}" due soon`);
    }
  }, [tasks]);

  return (
    <>
      <Header onLogout={onLogout} />

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
            tasks={tasks}
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
          <TeamList teams={sampleTeams} onTeamClick={(team) => setSelectedTeam(team)} />
        </div>
        
        {selectedTeam && (
          <AIChat teamLead={selectedTeam.lead} />
        )}
      </main>

      {/* Render the TaskModal when a task is selected */}
        {selectedTask && (
          <TaskModal
            isOpen={true}
            onClose={closeModal}
            task={selectedTask}
            teamLeads={teamLeads}
            onSave={saveTask}
          />
        )}
        <Toast message={toast} />
    </>
  );
}
