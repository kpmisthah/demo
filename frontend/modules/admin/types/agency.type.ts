import { AgencyStatus } from "./agency.status.enum";
import { TabOption } from "./tab.type";
export interface Agency {
  id: string;
  name: string;
  email: string;
  status: AgencyStatus;
  refreshToken?:string
}

export interface AgencyRequest {
  id: string;
  name: string;
  email: string;
}