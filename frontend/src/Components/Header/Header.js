import './Header.css';
import ice from '../../Assets/icecream.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { url } from '../../Utils/Links.js';

function Header()
{
  const navigate=useNavigate();
  const currentLocation=useLocation();
  
  const [checkName,setName]=useState("REGISTER");
  const [checkPath,setPath]=useState("/Login");
  
  const [cookieData,setCookieData]=useState('');

  useEffect(()=>{checkLocation();cookiesReceived()},[cookieData]);

  const checkLocation=()=>{

    if(currentLocation.pathname=="/Register")
      { 
        setName('LOGIN');
        setPath('/Login');
     }
     else if(currentLocation.pathname=="/" && cookieData)
     {   
        console.log("cookie /");
        setName('LOGOUT');
        setPath('/');
     }
     else if(currentLocation.pathname=="/" && !cookieData)
      {
          setName('REGISTER');
          setPath('/Register');
      }
  }
  const cookiesReceived=()=>{
    fetch(`${url}/getcookies`,{method:"GET",headers:{"Content-Type":"appplication/json"},credentials:"include"})
    .then(res=>{
      if(res.ok)
      {
         return res.json();
      }
      else
      {
         console.log("response not working");
      }
    })
    .then(data=>{
      if(data.userCookie)
      {
          setCookieData(data.userCookie);
          console.log("cookies",data.userCookie);
      }
      if(data.err)
      {
          console.log("No cookie found",data.err);
      }
     })
    .catch(e=>{
      console.log("Url not repsonding to fetch cookies",e);
    })
  }

  const cookieCheck=async ()=>{
    
    if (cookieData && cookieData !== "" && cookieData!==null) {
      fetch(`${url}/removeCookies`, { method: 'GET', headers: { 'Content-Type': 'application/json' }, credentials: "include" })
        .then(res => res.json())
        .then(data => {
          if (data.msg) {
            setName('REGISTER');
            setCookieData('');
            setPath("/Register");
            currentLocation.state.data=null;
            console.log("Cookies removed",data.msg);
          } else {
            console.log("Unable to remove cookies");
          }
        })
        .catch(err => {
          console.log("Unable to connect to remove cookie URL", err);
        });
    } else {
      setName('REGISTER');
      setPath('/Register');
      navigate(checkPath);
    }
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
        <h6 onClick={()=>{cookieCheck()}}>{checkName}</h6>
      </div>
    </div>);
}

export {Header};
