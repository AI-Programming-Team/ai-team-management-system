// src/components/TaskModal.jsx
import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "./ui/Dialog";
import { Button } from "./ui/Button";

const TaskModal = ({ isOpen, onClose, onSubmit, task }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("To Do");

    useEffect(() => {
        if (task) {
            setTitle(task.title || "");
            setDescription(task.description || "");
            setStatus(task.status || "To Do");
        }
    }, [task]);

    const handleSubmit = () => {
        if (title.trim() === "") return;
        const newTask = {
            id: task?.id || Date.now().toString(),
            title,
            description,
            status
        };
        onSubmit(newTask);
        handleClose();
    };

    const handleClose = () => {
        setTitle("");
        setDescription("");
        setStatus("To Do");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{task ? "Edit Task" : "New Task"}</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-2 rounded"
                        rows={4}
                    />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full border p-2 rounded"
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <DialogFooter>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TaskModal;
