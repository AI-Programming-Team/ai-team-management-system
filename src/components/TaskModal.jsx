import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/Dialog";
import Button  from "./ui/Button";

const TaskModal = ({ isOpen, onClose, task }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="relative">
          <DialogTitle>{task.title || "New Task"}</DialogTitle>
          {/* Close “X” in the corner */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </DialogHeader>

        <div className="py-4">
          {/* you can replace this with form fields */}
          <p>{task.description}</p>
        </div>

        <DialogFooter className="space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => {/* TODO: save or update logic */}}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;
