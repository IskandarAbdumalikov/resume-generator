import React, { useState } from "react";
import "./admin.scss";
import { Outlet } from "react-router-dom";
import AdminHeader from "./admin-header/AdminHeader";
import Sidebar from "./sidebar/Sidebar";
// import { useGetUsersQuery } from "../../context/userSlice";

const Admin = () => {
  const [close, setClose] = useState(false);
  // let { data } = useGetUsersQuery();
  // console.log(data);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar />
        <div>
          <AdminHeader setClose={setClose} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
