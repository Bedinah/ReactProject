import React from "react";

const ViewUsers=({ data }) =>{
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
        background:"gray"
      }}
    >
        <img src="{data?.profilePicture}" width="100%" style={{borderRadius:"50%"}}/>
        <h1>{data?.names}</h1>
        
    </div>
  );
}

export default ViewUsers;
