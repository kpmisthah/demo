"use client";
import { useState } from "react";
import { Agency, AgencyRequest } from "../../types/agency.type";
import { useAgencies } from "./use-agency-management";
import { AgencyStatus } from "../../types/agency.status.enum";

export const agencyActions = () => {
    const {agencies,setAgencies,updateStatus} = useAgencies()
    const [searchTerm, setSearchTerm] = useState("");
    // const [requests, setRequests] = useState<AgencyRequest[]>([]);
    const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
    const [selectedRequest, setSelectedRequest] = useState<AgencyRequest | null>(
    null
  );
    const [agencyTab, setAgencyTab] = useState<"agencies" | "requests">(
    "agencies"
  );
  const [editAgencyOpen, setEditAgencyOpen] = useState(false);
  const [deleteAgencyOpen, setDeleteAgencyOpen] = useState(false);

  const [editRequestOpen, setEditRequestOpen] = useState(false);

  const handleDeleteAgency = () => {
    if (selectedAgency) {
      setAgencies((prev) => prev.filter((a) => a.id !== selectedAgency.id));
      setDeleteAgencyOpen(false);
      setSelectedAgency(null);
    }
  };

  const handleSaveAgency = async(updatedAgency:Agency) => {
    try {
      console.log(updatedAgency.id,'id of agency and',updatedAgency.status,'status of agency');
           
          const newAGencies = await updateStatus(updatedAgency.id,updatedAgency.status,updatedAgency.email);
          console.log(newAGencies,'newAgencies changing status')
        setAgencies((prev) =>
      prev.map((agency) =>(
        agency.id === updatedAgency.id ? newAGencies : agency
      )
    )
  )
    setEditAgencyOpen(false);
    } catch (error) {
      console.log(error,'handle save agency error');
      
    }

  };

  const handleSaveRequest = (updated: any) => {
    setAgencies((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    setEditRequestOpen(false);
  };
//   const handleApproveRequest = async (id: string) => {
//   try {
//     await updateStatus(id,AgencyStatus.ACTIVE);
//   } catch (error) {
//     console.error("Failed to approve request", error);
//   }

// };
//  const handleRejectRequest = (id: string) => updateStatus(id, AgencyStatus.INACTIVE);


  const filteredAgencies = agencies.filter(
    (agency) =>
      agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agency.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredAgencies,'filtered agencies')
  const filteredRequests = agencies
  .filter((agency)=>agency.status == AgencyStatus.PENDING)
  .filter((agency)=>
    agency.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
  agency.email.toLocaleLowerCase().includes(searchTerm.toLowerCase()))
console.log(filteredRequests,'fitlreed req')
  return {
    // handleRejectRequest,
    handleDeleteAgency,
    handleSaveAgency,
    handleSaveRequest,
    filteredAgencies,
    filteredRequests,
    agencyTab,
    setAgencyTab,
    searchTerm,
    setSearchTerm,
    selectedAgency,
    setSelectedAgency,
    editAgencyOpen,
    setEditAgencyOpen,
    deleteAgencyOpen,
    setDeleteAgencyOpen,
    setSelectedRequest,
    setEditRequestOpen,
    selectedRequest,
    editRequestOpen,
    // handleApproveRequest,

  }
};
