import { User } from "./user.type";
export interface EditUserDialogProps {
  user: User | undefined;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: Partial<User>) => void;
}