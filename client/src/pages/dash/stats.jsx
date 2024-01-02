/* eslint-disable react/prop-types */
import { useState } from "react";
import { styled } from "styled-components";

const  PVR = styled.div`
background-color: #7fffd44f!important;
margin-left:33px;
margin-top:-8px;
padding-right:18px;
position:relative;
z-index:1;
`


const Stats = () => {
  const [glass , setGlass] = useState(false);
 
    
  return (
    <PVR  className={ glass ? "bodyin":"bodyout" }>
      g bc zc z cx 
      <div onClick={()=>{setGlass(!glass)}} >avdvd</div>
    </PVR>
  )
}

export default Stats
