import React from 'react'
import DashboardLayout from "../../component/dashboardLayout";
import UsersTable from '../../component/admin/usersTable';
const ManageUser = () => {
  return (
    <DashboardLayout menuSelectorIndex='2'>
        <UsersTable></UsersTable>
   </DashboardLayout>
  )
}

export default ManageUser;