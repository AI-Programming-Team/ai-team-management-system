import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/Dialog";
import Button  from "./ui/Button";

const TaskModal = ({ isOpen, onClose, task, teamLeads = [], onSave }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [status, setStatus] = useState(task.status || "");
  const [assignedTo, setAssignedTo] = useState(task.assignedTo || "");
  const [dueDate, setDueDate] = useState(task.dueDate || "");

  useEffect(() => {
    setTitle(task.title || "");
    setDescription(task.description || "");
    setStatus(task.status || "");
    setAssignedTo(task.assignedTo || "");
    setDueDate(task.dueDate || "");
  }, [task]);

  const handleSave = () => {
    onSave({
      ...task,
      title,
      description,
      status,
      assignedTo,
      dueDate,
    });
    onClose();
  };


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>{task.id ? "Edit Task" : "New Task"}</DialogTitle>  
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded p-2"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Assigned To</label>
            <select
              className="w-full border rounded p-2"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            >
              <option value="">Select team member</option>
              {teamLeads.map((lead) => (
                <option key={lead} value={lead}>
                  {lead}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Due Date</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {task.id ? "Update" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
