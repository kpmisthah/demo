"use client"
import { useUsers } from "./use-user-management";
import { User } from "../../types/user.type";
import { useState } from "react";

export const userActions = ()=>{
    const {update,remove,users,setUsers} = useUsers()
    const [editingUser, setEditingUser] = useState<User>();
    const [deletingUser, setDeletingUser] = useState<User>();
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
);
    
    const handleEditUser = (user:User) => {
    setEditingUser(user);
    setEditDialogOpen(true);
  };

  const handleSaveUser = async (updatedData:Partial<User>) => {
    try {
      await update(editingUser?.id!, updatedData);
      setUsers((prev)=>
        prev.map((user)=>
          user.id == editingUser?.id?{...user,...updatedData}:user
        )
      )
    } catch (error) {
      
    }
  };

  const handleDeleteUser = (user:User) => {
    setDeletingUser(user);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    remove(deletingUser?.id!,{isBlock:!deletingUser?.isBlock});
  };
    return {
    editingUser,
    deletingUser,
    editDialogOpen,
    deleteDialogOpen,
    searchTerm,
    filteredUsers,
    setSearchTerm,
    setEditDialogOpen,
    setDeleteDialogOpen,
    handleEditUser,
    handleSaveUser,
    handleDeleteUser,
    handleConfirmDelete,
    setEditingUser,
    setDeletingUser,
  };
  }

