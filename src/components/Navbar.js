import React from "react"; 

export default function Navbar({page,setPage}){
    return(
<ul className="nav">
<li><a href="#about" onClick={()=>setPage("about")}> About Me </a></li>
<li><a href="#main" onClick={()=>setPage("main")}> Portfolio </a></li>
<li><a href="#resume" onClick={()=>setPage("resume")}> Resume </a></li>
<li><a href="#contact" onClick={()=>setPage("contact")}> Contact </a></li>
</ul>
    )
}

