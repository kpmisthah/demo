import api from "@/lib/api";
import { User } from "../types/user.type";

export const getUser = async ()=>{
    try {
        const response = await api.get('/users')
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateUser = async (id:string,updateData:Partial<User>)=>{
    try {
        console.log(id,'id',updateData,'updateData')
        const response = await api.put(`/users/${id}`,updateData)
        console.log(response)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteUser = async(id:string,updateData:Partial<User>)=>{
    try {
        const response = await api.put(`/users/${id}`,updateData)
        return response.data
    } catch (error) {
        throw error
    }
}