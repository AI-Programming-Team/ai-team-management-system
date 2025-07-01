// src/components/TaskModal.jsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/Dialog";
import Button from "./ui/Button";

const TaskModal = ({ isOpen, onOpenChange, onSubmit, task }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  // When opening to edit or create, initialize fields
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("To Do");
    }
  }, [task, isOpen]);

  const handleSave = () => {
    onSubmit({ title, description, status });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task ? "Edit Task" : "New Task"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border rounded px-2 py-1"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full border rounded px-2 py-1"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </div>
        <DialogFooter>
          <Button onClick={onOpenChange}>Cancel</Button>
          <Button onClick={handleSave}>
            {task ? "Update" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
