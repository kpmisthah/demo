import { Check, Download, Edit, Filter, Search, Trash2, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { DeleteConfirmDialog } from "./Delete-Dialg";
import { EditAgencyDialog } from "./Edit-agency-dialog";
import { EditRequestDialog } from "./Edit-req-dialog";
import { agencyActions } from "../../hooks/agency-management/use-agency-action";
import { AgencyStatus } from "../../types/agency.status.enum";

const AgencyManagement = () => {
  const {
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
    // handleRejectRequest,
  } = agencyActions();

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Agency Management
          </CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex space-x-2">
              <Button
                variant={agencyTab === "agencies" ? "default" : "outline"}
                onClick={() => setAgencyTab("agencies")}
              >
                Agencies
              </Button>
              <Button
                variant={agencyTab === "requests" ? "default" : "outline"}
                onClick={() => setAgencyTab("requests")}
              >
                Requests
              </Button>
            </div>
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={`Search ${
                  agencyTab === "agencies" ? "agencies" : "requests"
                }...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
              <Button className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {agencyTab === "agencies"
                  ? filteredAgencies
                      .filter(
                        (agency) =>
                          agency.status == AgencyStatus.ACTIVE ||
                          agency.status == AgencyStatus.INACTIVE
                      )
                      .map((agency) => (
                        <tr
                          key={agency.id}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {agency.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {agency.email}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Badge
                              variant={
                                agency.status === "ACTIVE"
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {agency.status === "INACTIVE"
                                ? "Active"
                                : "Inactive"}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelectedAgency(agency);
                                  setEditAgencyOpen(true);
                                }}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant={
                                  agency.status == AgencyStatus.ACTIVE
                                    ? "default"
                                    : "destructive"
                                }
                                size="sm"
                                onClick={() =>
                                  handleSaveAgency({
                                    ...agency,
                                    status:
                                      agency.status == AgencyStatus.ACTIVE
                                        ? AgencyStatus.INACTIVE
                                        : AgencyStatus.ACTIVE,
                                  })
                                }
                              >
                                {agency.status == AgencyStatus.ACTIVE
                                  ? "Deactivate"
                                  : "Activate"}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                  : filteredRequests
                      .map((agency) => (
                        <tr
                          key={agency.id}
                          className="border-b hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {agency.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {agency.email}
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Badge
                              variant={
                                agency.status === AgencyStatus.ACTIVE
                                  ? "default"
                                  : agency.status === AgencyStatus.INACTIVE
                                  ? "destructive"
                                  : "outline"
                              }
                            >
                              {agency.status === AgencyStatus.ACTIVE
                                ? "Active"
                                : agency.status === AgencyStatus.INACTIVE
                                ? "Inactive"
                                : "Pending"}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setSelectedAgency(agency);
                                  setEditAgencyOpen(true);
                                }}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() =>
                                  handleSaveAgency({
                                    ...agency,
                                    status: AgencyStatus.ACTIVE,
                                  })
                                }
                              >
                                Accept
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() =>
                                  handleSaveAgency({
                                    ...agency,
                                    status: AgencyStatus.INACTIVE,
                                  })
                                }
                              >
                                Reject
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
          {/* Mobile View as cards */}
          <div className="lg:hidden space-y-4">
            {agencyTab === "agencies"? filteredAgencies
        .filter(
          (agency) =>
            agency.status === AgencyStatus.ACTIVE ||
            agency.status === AgencyStatus.INACTIVE
        )
        .map((agency) => (
          <Card key={agency.id} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{agency.name}</h4>
                  <p className="text-sm text-gray-600">{agency.email}</p>
                </div>
                <Badge
                  variant={
                    agency.status === AgencyStatus.ACTIVE
                      ? "default"
                      : "destructive"
                  }
                >
                  {agency.status === AgencyStatus.ACTIVE
                    ? "Active"
                    : "Inactive"}
                </Badge>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedAgency(agency);
                    setEditAgencyOpen(true);
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  variant={
                    agency.status === AgencyStatus.ACTIVE
                      ? "destructive"
                      : "default"
                  }
                  size="sm"
                  onClick={() =>
                    handleSaveAgency({
                      ...agency,
                      status:
                        agency.status === AgencyStatus.ACTIVE
                          ? AgencyStatus.INACTIVE
                          : AgencyStatus.ACTIVE,
                    })
                  }
                >
                  {agency.status === AgencyStatus.ACTIVE
                    ? "Deactivate"
                    : "Activate"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
          : filteredRequests
        .filter((agency) => agency.status === AgencyStatus.PENDING)
        .map((agency) => (
          <Card key={agency.id} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{agency.name}</h4>
                  <p className="text-sm text-gray-600">{agency.email}</p>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() =>
                    handleSaveAgency({
                      ...agency,
                      status: AgencyStatus.ACTIVE,
                    })
                  }
                >
                  Accept
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() =>
                    handleSaveAgency({
                      ...agency,
                      status: AgencyStatus.INACTIVE,
                    })
                  }
                >
                  Reject
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedAgency(agency);
                    setEditAgencyOpen(true);
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
</div>

        </CardContent>
      </Card>

      {/* Dialogs */}
      <EditAgencyDialog
        agency={selectedAgency}
        isOpen={editAgencyOpen}
        onOpenChange={setEditAgencyOpen}
        onSave={handleSaveAgency}
      />
      <EditRequestDialog
        request={selectedRequest}
        isOpen={editRequestOpen}
        onOpenChange={setEditRequestOpen}
        onSave={handleSaveRequest}
      />
    </div>
  );
};

export default AgencyManagement;
