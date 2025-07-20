import { TabOption } from "./tab.type";
export interface Payout {
  id: string;
  agency: string;
  amount: number;
  method: string;
  status: TabOption;
  date: string;
}