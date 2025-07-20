import { TabOption } from "./tab.type";
export interface Booking {
  id: string;
  customer: string;
  agency: string;
  destination: string;
  date: string;
  cost: number;
  status: TabOption;
  payment: TabOption;
}