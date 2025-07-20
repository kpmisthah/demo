import api from "@/lib/api";
import { AgencyStatus } from "../types/agency.status.enum";

export const getAgencies = async ()=>{
    try {
        const response = await api.get('/agencies')
        console.log(response,'response getAgencies')
        return response.data
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

export const updateAgencies = async (agencyId:string,status:AgencyStatus,email:string) =>{
    try {
        console.log('send id to bacend',agencyId,status,'status')
        const response = await api.patch(`/agencies/${agencyId}`,{status,email})
        console.log(response,'response form agencyUpdate')
        return response.data
    } catch (error) {
        console.log(error);
        throw error
        
    }
}