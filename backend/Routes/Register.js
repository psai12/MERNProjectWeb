import express from 'express';
import registerModel from '../Models/RegisterModel.js';
const router=express.Router();


router.get("/getcookies",(req,res)=>{
  const user=req.cookies.username;
  if(user)
  {
    res.send({userCookie:user});
  }
  else
  {
    res.send({err:"Cookie not present!"});
  }  
});

router.get("/removeCookies",(req,res)=>{
  console.log("cookies");
    res.cookie("username","",{expires:new Date(Date.now()),httpOnly:true});
    res.send({msg:"cookies removed"});
});

router.post('/register',async(req,res)=>{
  const body=req.body;
  try
  {
    let user=await registerModel.findOne({email:body.email});
    console.log(user);
    if(user)
    {
        res.send({err:"Email already registered!"});
    }
    else
    {
        let userCreated=new registerModel(body);
        await userCreated.save();
        if(userCreated)
        {
          res.cookie("username",body.email,{httpOnly:true,maxAge:9000000});
          res.send({msg:"Registered!"});
        }
      
        else
        res.send({err:"Difficult to register!"})
    }
  }
  catch(err)
  {
    res.send({err:err});
    console.log('3');
  }
});

export default router;