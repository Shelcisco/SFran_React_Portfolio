import React from "react"; 
import Navbar from "./Navbar";

export default function Header({page,setPage}){
    return(

        <div className="header">
    
        <h1> Shelby Francisco
         
        </h1>
        <Navbar page={page} setPage={setPage}/>
      </div>

    )
}
