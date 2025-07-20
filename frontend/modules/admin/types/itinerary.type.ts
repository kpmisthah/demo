import { TabOption } from "./tab.type";
export interface Itinerary {
  id: number;
  name: string;
  agency: string;
  status: TabOption;
  createdDate: string;
}