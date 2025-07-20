import { User } from "./user.type";

export interface DeleteDialogProps {
  user: User | undefined;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};
