import { Header } from '../../Components/Header/Header.js';
import './Register.css';
import react, { useState } from 'react';
import {Footer} from '../../Components/Footer/Footer.js';
import { url } from '../../Utils/Links.js';

function Register()
{
    const registerEndPoint="register";

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPassword,setCPassword]=useState('');

    const saveRegisterData=async ()=>{
        try
        {
            const res=await fetch(`${url}/${registerEndPoint}`,{method:'POST',headers:{"Content-Type":"application/json"},
            body:JSON.stringify({"name":name,"email":"email","password":password})});
            
            if(res.ok)
            {
              const data=await res.json();
              console.log(data);
            }
            else
            {
                console.log("No response from endPoint!");
            }
        }
        catch(err)
        {
              console.log("Error connecting url!",err);
        }
    }
    return (
    <div className='RegisterContainer'>
      <Header/>
      <div className='RegisterForm'>
         <h2>Register Yourself!</h2>
         <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
         <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
         <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         <input type="password" placeholder='ConfirmPassword' onChange={(e)=>{setCPassword(e.target.value)}}/>
         <button onClick={()=>saveRegisterData()}>Submit</button>
      </div>
      <Footer/>
    </div>
    );
}

export default Register;