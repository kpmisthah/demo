"use client"
import { useEffect, useState } from "react"
import { getAgencies, updateAgencies } from "../../services/agency.service"
import { Agency } from "../../types/agency.type"
import { AgencyStatus } from "../../types/agency.status.enum"

export const useAgencies = ()=>{
    const [agencies,setAgencies] = useState<Agency[]>([])
    useEffect(()=>{
        const fetchUser = async ()=>{
            const data = await getAgencies()
            console.log(data,'getAgencies fetching data')
            setAgencies(data)
            
        }
        fetchUser()
    },[])

    const updateStatus = async (id:string,status:AgencyStatus,email:string)=>{
        console.log(id,'id of status in mng.ts',status,'status of mng.ts')
    try {
        let updatedAgency = await updateAgencies(id,status,email)
        setAgencies((prevAgency)=>
            prevAgency.map((agency)=>
            agency.id == id ? {...agency,status}:agency
    )
        )
        return updatedAgency
    } catch (error) {
        console.log(error);
        throw error
    }
}
    return {agencies,setAgencies,updateStatus}
}

