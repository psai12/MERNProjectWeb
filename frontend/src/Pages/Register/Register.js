import { Header } from '../../Components/Header/Header.js';
import './Register.css';
import react, { useState } from 'react';
import {Footer} from '../../Components/Footer/Footer.js';
import { url } from '../../Utils/Links.js';
import  {useNavigate}  from 'react-router-dom';

function Register()
{
    let navigate = useNavigate();
    
    const registerEndPoint="register";

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPassword,setCPassword]=useState('');

    const [error,setError]=useState('');

    const saveRegisterData=async ()=>{
        if(!name || name==='')
        {
            setError("Name can't be blank");
            return;
        }
        if(!email || email==='')
        {
            setError("Email can't be blank");
            return;
        }
        if(!password || password==='')
        {
            setError("Password can't be blank");
            return;
        }
        try
        {
            const res=await fetch(`${url}/${registerEndPoint}`,{method:'POST',headers:{"Content-Type":"application/json"},
            credentials:'include',body:JSON.stringify({"name":name,"email":email,"password":password})});
            
            if(res.ok)
            {
              const data=await res.json();
              if(data.err)
              {
                   setError(data.err);
              }
              else
              {
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
                        console.log("cookies",data.userCookie);
                        navigate('/',{state:{data:data.userCookie}});
                    }
                    if(data.err)
                    {
                        console.log("No cookie found",data.err);
                    }
                   })
                  .catch(e=>{
                    console.log("Url not repsonding to fetch cookies",e);
                  })
                   alert(data.msg);
                   
              }
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
         <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
         <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/>
         <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
         <input type="password" placeholder='ConfirmPassword' onChange={(e)=>{setCPassword(e.target.value)}} required/>
         <text style={{color:"red",fontSize:"12px"}}>{error}</text>
         <button onClick={()=>saveRegisterData()}>Submit</button>
      </div>
      <Footer/>
    </div>
    );
}

export default Register;