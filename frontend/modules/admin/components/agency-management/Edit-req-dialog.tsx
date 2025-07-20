// components/EditRequestDialog.tsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { X } from "lucide-react";
import { AgencyRequest } from '../../types/agency.type';

interface EditRequestDialogProps {
  request: AgencyRequest | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (request: AgencyRequest) => void;
}

export const EditRequestDialog: React.FC<EditRequestDialogProps> = ({
  request,
  isOpen,
  onOpenChange,
  onSave,
}) => {
  const [formData, setFormData] = useState<Partial<AgencyRequest>>({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (request) {
      setFormData({
        name: request.name,
        email: request.email,
      });
    }
  }, [request]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request && formData.name && formData.email) {
      onSave({
        ...request,
        name: formData.name,
        email: formData.email
      });
    }
  };

  const handleInputChange = (field: keyof AgencyRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Request</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Agency Name *
            </label>
            <Input
              value={formData.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input
              type="email"
              value={formData.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};