// components/DeleteConfirmDialog.tsx
import React from 'react';
import { Button } from "@/shared/components/ui/button";
import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title: string;
  description: string;
  itemName?: string;
}

export const DeleteConfirmDialog: React.FC<DeleteConfirmDialogProps> = ({
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  description,
  itemName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          {itemName && (
            <div className="bg-gray-50 p-3 rounded-md border">
              <p className="text-sm font-medium text-gray-900">{itemName}</p>
            </div>
          )}
          <p className="text-sm text-red-600 mt-2 font-medium">
            This action cannot be undone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            className="w-full sm:w-auto"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};