import React from "react";
import { Routes,Route} from "react-router-dom";
import HomeLayout from "../component/HomeLayout";
import Home from "../views/Home";
import Tours from "../views/tours";
import Contacts from "../views/contacts";
import DashboardLayout from "../component/dashboardLayout";
import NewTours from "../views/DashBoard/newTour";



const Index=()=>{
    return(
        <>
        
        <HomeLayout>
<Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/tours" element={<Tours/>}></Route>
    <Route exact path="/contacts" element={<Contacts/>}></Route>
    
</Routes>
<DashboardLayout>
    <Routes>
    <Route exact path="/dashboardLayout" element={<NewTours/>}></Route>
    
    </Routes>
</DashboardLayout>
</HomeLayout>

</>
    )
};
export default Index;