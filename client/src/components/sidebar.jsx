/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const Box = styled.div`
   
   z-index: -1;
   position: absolute;
   
   
   img{
     height:99.5vh;
     width:15vw;
     transition: 1s ;
   }
`


const Sidebar = ({ glass }) => {
  return (
    <Box>
      <img className={glass ? "imgon" :"imgof"} src="https://res.cloudinary.com/dabh5hsuk/image/upload/v1699354577/oowtuoyr9gyyyhyxrjtb.jpg" alt="img" />
    </Box>
  )
}

export default Sidebar
