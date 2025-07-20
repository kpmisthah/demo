
import {create} from 'zustand'
import { User } from '@/modules/admin/types/user.type'; 

interface AuthState {
    user:User|null;
    isAuthenticated:boolean; 
    setAuthUser :(user:User)=> void;

    clearAuth:()=>void
}

export const useAuthStore = create<AuthState>((set)=>({
    user:null,
    isAuthenticated:false,
    setAuthUser:(user)=>{
        set({
            user:user,
            isAuthenticated:true
        })
    },
    clearAuth: ()=>{ 
        set({
            user:null,
            isAuthenticated:false
        })
    }
}));

