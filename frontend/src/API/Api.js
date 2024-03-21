import {url}  from '../Utils/Links.js';

const loginEndpoint="login";

const removeCookies="removeCookies";
async function fetchLoginDetails(data)
{
    try
    {
        const response=await fetch(`${url}/${loginEndpoint}`,{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(data),credentials:"include"})

        if(response.ok)
        {
            return response.json();
        }
        else
        {
            return false;
        }
    }
    catch(err)
    {
        throw err;
    }
}

async function Logout()
{
    try
    {
        const response=await fetch(`${url}/${removeCookies}`,{method:"GET",headers:{'Content-Type':'application/json'},credentials:"include"})

        if(response.ok)
        {
            return response.json();
        }
        else
        {
            return false;
        }
    }
    catch(err)
    {
        throw err;
    }
}


export {fetchLoginDetails,Logout};