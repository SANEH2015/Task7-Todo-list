import React from 'react'
import Image from '../assets/todoimage-removebg-preview.png'


export default function Landingpage() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor,height:"100vh",width:"100%"}}>
    <div>
    <p>-FREE 30 DAYS TRIAL</p>
    <h1 style={{fontSize:"80px",fontWeight:"bold"}}>We help you<br></br>Organize your self<br></br></h1>
    <p>To-do App is simple and<br></br>awesome App to organise <br></br>your task with very easy<br></br>to use interface</p>
   <Link to={'/About'}><button style={{backgroundColor:"rgb(4, 52, 80)",color:"white",padding:"20px",borderRadius:"10px",margin:"10px"}}>Read More</button></Link> 

    </div>
    
    <div>
<img src={Image}></img>
    </div>

  </div>
  )
}
