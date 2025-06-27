// src/components/ui/Dialog.jsx
import React from "react";

export const Dialog = ({ open, onOpenChange, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded shadow-lg w-full max-w-lg relative">
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export const DialogContent = ({ children }) => {
    return <div className="p-6">{children}</div>;
};

export const DialogHeader = ({ children }) => {
    return <div className="mb-4">{children}</div>;
};

export const DialogTitle = ({ children }) => {
    return <h2 className="text-xl font-bold">{children}</h2>;
};

export const DialogFooter = ({ children }) => {
    return <div className="mt-6 flex justify-end space-x-2">{children}</div>;
};
