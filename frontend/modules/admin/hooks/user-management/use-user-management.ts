import { useEffect, useState } from "react";
import { User } from "../../types/user.type";
import { getUser,updateUser,deleteUser } from "../../services/user.service";
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUser();
  }, []);

  const update = async (id:string,updateData:Partial<User>)=>{
    try {
        await updateUser(id,updateData)
        setUsers((prevUser)=>
            prevUser.map((user)=>
                user.id == id?{...updateData,...user}:user
            )
        )
    } catch (error) {
        console.log('failed to update users',error);
        throw error
    }
  }

  const remove = async(id:string,updateData:Partial<User>)=>{
    try {
        await deleteUser(id,updateData)
        setUsers((prevUser)=>
        prevUser.map((user)=>
            user.id == id?{...user,...updateData}:user
        ))
    } catch (error) {
        
    }
  }
  
  return { users,update,remove ,setUsers};
};
