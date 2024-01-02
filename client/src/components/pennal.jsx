import { styled } from "styled-components";

import { Link } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { BsFillInboxesFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FaNoteSticky , FaDatabase ,FaFileInvoiceDollar ,FaPeopleGroup } from "react-icons/fa6";
import { FaTruck ,FaHandshake } from "react-icons/fa";


const Box = styled.div`

   z-index: 10;
   position: absolute;
   background-color:#636363a1;
   height:100vh;
   width: 15vw;
   transition: 1s ;
   
   .logo{
     color:white;
     font-family:Inter Tight;
     display:flex;
     justify-content:center;
     align-items: center;
     margin-top: 15px;
     margin-bottom: 15px;
     border-bottom: 2px solid gray;
   }
   .logo img {
     height:50px;
     width:50px;
   }
   li{
    color:white;
    font-family:Inter Tight;
    display:flex;
    align-items: center;
   }
   a{
    color:white;
    font-family:Inter Tight;
    display:flex;
    text-decoration:none;
    align-items: center;
   }
   svg{
    
    margin-right:10px;
    height:35px;
    width:35px;
    color:white;
   }
`
const Pannel = () => {
  return (
    <Box >

      <div className="logo">
        <img src="https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/keib7jpdlosmjktvfq90.jpg" alt="logo" />
        <h3> CREATIVE TM </h3>
      </div>


      <ul>
        <li>
          <Link to="/dashboard" >
            <RxDashboard /><h2>Dashboard</h2>
          </Link>
        </li>
        <li>
          <Link to="/orders" >
          <BsFillInboxesFill /><h2>Orders</h2>
          </Link>
        </li>
        <li>
          <Link to="/notes" >
          <FaNoteSticky /><h2>Notes</h2>
          </Link>
        </li>
        <li>
          <Link to="/tracking" >
          <FaTruck /><h2>Tracking product</h2>
          </Link>
        </li>
        <li>
          <Link to="/customers" >
          <FaPeopleGroup /><h2>Top Customers</h2>
          </Link>
        </li>
        <li>
          <Link to="/deals" >
          <FaHandshake /><h2>Top Deals</h2>
          </Link>
        </li>
        <li>
          <Link to="/sells" >
          <MdSell /> <h2>Sells</h2>
          </Link>
        </li>
        <li>
          <Link to="/bill" >
          <RiBillFill /><h2>Billing</h2>
          </Link>
        </li>
        <li>
          <Link to="/invoice" >
          <FaFileInvoiceDollar /><h2>Invoice</h2>
          </Link>
        </li>
        <li>
          <Link to="/data" >
          <FaDatabase /><h2>DATA</h2>
          </Link>
        </li>


      </ul>

    </Box>
  )
}
export default Pannel