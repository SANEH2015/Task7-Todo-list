import React from 'react'
import Image from '../assets/todoimage-removebg-preview.png'
import { Link } from "react-router-dom";
import logo from "../assets/planelogo-removebg-preview.png"
export default function Landingpage() {
  return (
    <>
    <div style={{display:"flex"}}>
     <div>
     <img  src={logo} style={{width:"200px"}}></img>
     </div>
     <div style={{marginLeft:"1000px"}} >
     <Link to={'login'}><button style={{float:"right",padding:"20px",border:"none",backgroundColor:"#0F5BFF",margin:"10px",borderRadius:"10px"}}>log in</button> </Link> 
     <Link to={'Register'}><button style={{float:"right",padding:"20px",border:"none",backgroundColor:"#0F5BFF",margin:"10px",borderRadius:"10px"}}>Register</button></Link> 
     </div>
    </div>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"}}>
    <div>
    <p>-FREE 30 DAYS TRIAL</p>
    <h1 style={{fontSize:"80px",fontWeight:"bold"}}>We help you<br></br>Organize your self<br></br></h1>
    <p>To-do App is simple and<br></br>awesome App to organise <br></br>your task with very easy<br></br>to use interface</p>
   <Link to={'/About'}><button style={{backgroundColor:"rgb(4, 52, 80)",color:"white",padding:"20px",borderRadius:"10px",margin:"10px"}}>Read More</button></Link> 

    </div>
    
    <div>
<img  src={Image}></img>
    </div>

  </div>

    </>
   
  )
}
