import { styled } from "styled-components";

import { Link } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { BsFillInboxesFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";
import { FaNoteSticky , FaDatabase ,FaFileInvoiceDollar ,FaPeopleGroup } from "react-icons/fa6";
import { FaTruck ,FaHandshake } from "react-icons/fa";
import { useState } from "react";


const Box = styled.div`

   z-index: 10;
   position: absolute;
   background-color:#636363a1;
   height:99.5vh;
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

 const [isAdmin,setSAdmin] = useState(true);
 const free = false ;  
 
 if(free){
     setSAdmin(!isAdmin);
   }
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
          <Link to="/dashboard/orders" >
          <BsFillInboxesFill /><h2>Orders</h2>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/notes" >
          <FaNoteSticky /><h2>Notes</h2>
          </Link>
        </li>
      { isAdmin === false &&
          <li>
            <Link to="/dashboard/tracking" >
            <FaTruck /><h2>Tracking product</h2>
            </Link>
          </li>
        }
        {isAdmin &&
        <li>
          <Link to="/dashboard/customers" >
          <FaPeopleGroup /><h2>Top Customers</h2>
          </Link>
        </li>
        }

        {isAdmin &&
        <li>
          <Link to="/dashboard/deals" >
          <FaHandshake /><h2>Top Deals</h2>
          </Link>
        </li>
        }
       
       {isAdmin === false &&
        <li>
          <Link to="/dashboard/sells" >
          <MdSell /> <h2>Sells</h2>
          </Link>
        </li>
       }
       {isAdmin &&
        <li>
          <Link to="/dashboard/bill" >
          <RiBillFill /><h2>Billing</h2>
          </Link>
        </li>
}
{isAdmin &&
        <li>
          <Link to="/dashboard/invoice" >
          <FaFileInvoiceDollar /><h2>Invoice</h2>
          </Link>
        </li>
}
{isAdmin &&
        <li>
          <Link to="/dashboard/data" >
          <FaDatabase /><h2>DATA</h2>
          </Link>
        </li>
}

      </ul>

    </Box>
  )
}
export default Pannel