import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "../component/HomeLayout";
import Home from "../views/Home";
import About from "../views/aboutUs";
import Contacts from "../views/contacts";
import Gallery from "../views/gallery";

import Tours from "../views/tours";
import ManageUser from "../views/admin/manageUser";
import ManageTrip from "../views/admin/manageTrip";
import Dashboard from "../views/admin/dashboard"



const Index = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/aboutUs" element={<About />}></Route>
        <Route exact path="/contacts" element={<Contacts />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        
        <Route exact path="/tours" element={<Tours />}></Route>
        <Route exact path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/admin/users" element={<ManageUser/>}></Route>
        <Route exact path="/admin/trips" element={<ManageTrip/>}></Route>
      </Routes>
    </HomeLayout>
  );
};
export default Index;
