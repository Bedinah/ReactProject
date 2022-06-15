import React from "react";
import { Routes,Route} from "react-router-dom";
import Home from "../views/Home";
import Tours from "../views/tours";


const Index=()=>{
    return(
<Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/tours" element={<Tours/>}></Route>
    
</Routes>
    )
};
export default Index;