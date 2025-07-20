import { useEffect, useState } from "react";
import { User } from "../../types/user.type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { Label } from "@/shared/components/ui/label";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Button } from "@/shared/components/ui/button";
import { Save } from "lucide-react";
import { EditUserDialogProps } from "../../types/edit-modal.type";
import { useEditForm } from "../../hooks/user-management/use-edit-form";
// Edit User Dialog
export const EditUserDialog = ({ user, isOpen, onOpenChange, onSave }:EditUserDialogProps) => {
    const {formData,setFormData,handleChange}  = useEditForm(user)
    const handleSubmit = () => {
    onSave(formData);
    onOpenChange(false);
  };
  if(!user) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="profile">Profile</Label>
            <Select value={formData.profile} onValueChange={(value) => handleChange('profile', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Enter email address"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isBlock"
              checked={formData.isBlock}
              onCheckedChange={(checked) => handleChange('isBlock', checked)}
            />
            <Label htmlFor="isBlock">Block User</Label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};