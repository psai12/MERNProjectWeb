import { Header } from '../../Components/Header/Header.js';
import '../Register/Register.css';
import react, { useState } from 'react';
import {Footer} from '../../Components/Footer/Footer.js';
import { fetchLoginDetails } from '../../API/Api.js';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Login()
{
  const navigate=useNavigate();
  const [email,SetEmail]=useState('');
  const [password,SetPassword]=useState('');

  const loginSubmission=()=>{
   let data={
      email:email,
      password:password
   }
              if(!email || email==null)
              {
                alert("Email can't be null");
                return;
              } 
              if(!password || password==null)
              {
                alert("Password can't be null");
                return;
              }
               fetchLoginDetails(data)
               .then(res=>{
                 if(res.login)
                 {
                  localStorage.setItem("login",true);
                  alert("Loggined Successfully");
                  navigate("/");
                 }
                 else
                 {
                  localStorage.setItem("login",false);
                  alert("Something incorrect");
                  window.location.reload();
                 }
               })
               .catch(e=>{
                console.log(e)
               })
  }
    return (
    <div className='RegisterContainer'>
      <Header/>
      <div className='RegisterForm'>
         <h2>Login First!</h2>
         <input type="email" placeholder='Email' onChange={(e)=>SetEmail(e.target.value)}/>
         <input type="password" placeholder='Password' onChange={(e)=>SetPassword(e.target.value)}/>
         <button onClick={()=>loginSubmission()}>Submit</button>
      </div>
      <Footer/>
    </div>
    );
}

export default Login;