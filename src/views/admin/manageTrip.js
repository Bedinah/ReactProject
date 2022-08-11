import React from "react";
import TripsTable from "../../component/admin/tripsTable";
import DashboardLayout from "../../component/dashboardLayout";

const ManageTrip = () => {
  return (
    <DashboardLayout menuSelectorIndex='3'>
     <TripsTable>

     </TripsTable>
    </DashboardLayout>
  );
};

export default ManageTrip;
