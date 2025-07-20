"use client"
import { useState } from "react";
import { DeleteDialogProps } from "../../types/delete-modal.type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { AlertTriangle, Trash2 } from "lucide-react";
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import { Button } from "@/shared/components/ui/button";

export const DeleteConfirmDialog = ({ user, isOpen, onOpenChange, onConfirm }:DeleteDialogProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    onConfirm();
    setIsDeleting(false);
    onOpenChange(false);
  };

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span>Delete User</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-700">
              This action cannot be undone. This will permanently delete the user and all associated data.
            </AlertDescription>
          </Alert>
          
          <p className="mt-4 text-sm text-gray-600">
            Are you sure you want to delete <strong>{user.name}</strong>?
          </p>
        </div>
        
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isDeleting}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleDelete} 
            disabled={isDeleting}
            className="flex items-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>{isDeleting ? 'Deleting...' : 'Delete User'}</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};