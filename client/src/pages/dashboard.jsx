
import { useState } from "react";
import { Sidebar,Pannel } from "../components";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Box =styled.div`
display:flex;
`


const Dashboard = () => {
   
  const [glass , setGlass] = useState(true);
  document.body.style.background = "#B2ABF2";
    

  return (
    <>
   <Box>
     <div style={{height:"100vh",width:"15vw",marginLeft:"-8px",marginTop:"-8px"}} onPointerEnter={()=>{setGlass(false)}} onPointerLeave={()=>{setGlass(true)}} >
       <Pannel glass={glass} />
       <Sidebar glass={glass}/>
     </div>
     <Outlet glass={glass} />
   </Box>
    </>
  )
}

export default Dashboard
