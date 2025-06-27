// src/components/TaskModal.jsx
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "./ui/Dialog";
import { Button } from "./ui/Button";

const TaskModal = ({ isOpen, onClose, task }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{task.title}</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    <p>{task.description}</p>
                </div>
                <DialogFooter>
                    <Button onClick={onClose}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TaskModal;
