import './Header.css';
import ice from '../../Assets/icecream.png';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { url } from '../../Utils/Links.js';
import { Logout } from '../../API/Api.js';

function Header()
{
  const navigate=useNavigate();

  const [checkName,setName]=useState("REGISTER");
  
  useEffect(()=>{
    if(localStorage.getItem("login")==="true")
    {
      setName("LOGOUT");
    }
    else
    {
      setName("REGISTER");
    }
    console.log(localStorage.getItem("login"),checkName);
  },[]);
  
  const logout=()=>{
    if(localStorage.getItem("login")==="false")
    {
      navigate("/Register");
      return;
    }
    Logout()
    .then(res=>{
      if(res.cookies)
      {
        localStorage.setItem("login","false");
        navigate("/Register");
      }
     })
     .catch((err)=>
     {
      throw err;
     })
    
  }

 

 return(
    <div className='HeaderContainer'>
      <div className='NavContainer'>
        <h6 className='MenuHeader'>MENU
        <div className='SubMenuParent'>
             <div className='SubMenuChild'>
               <h6 onClick={()=>{window.location.href="/Cones"}}>CONES</h6>
               <h6 onClick={()=>{window.location.href="/Pines"}}>PINTS</h6>
               <h6 onClick={()=>{window.location.href="/Cakes"}}>CAKES</h6>
               <h6 onClick={()=>{window.location.href="/Cheesecakes"}}>CHEESECAKES</h6>
               </div>
        </div>
        </h6>
        <h6>LOCATIONS</h6>
        <h6 onClick={()=>{window.location.href="/Catering"}}>CATERING</h6>
        <img src={ice} width='100' height='100' onClick={()=>{window.location.href="/"}}/>
        <h6>SOCIAL</h6>
        <h6 onClick={()=>{logout()}}>{checkName}</h6>
      </div>
    </div>);
}

export {Header};
