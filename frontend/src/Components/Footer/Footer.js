import './Footer.css';
import facebook from '../../Assets/facebook.png';
import Instagram from '../../Assets/Instagram.png';
import LinkedIn from '../../Assets/linkedIn.png';
import React from 'react';

function Footer()
{
return(
    <div className='FooterContainer'>
       <div className='SocialLinks'>
           <img src={facebook} width="40" height="40" onClick={()=>{window.location.href=`http://facebook.com`}}/>
           <img src={Instagram} width="40" height="40" onClick={()=>{window.location.href=`http://Instagram.com`}}/>
           <img src={LinkedIn} width="40" height="40" onClick={()=>{window.location.href=`http://LinkedIn.com`}}/>
       </div>
       <div className='MenuFooter'>
         <h5>CONTACT US</h5>
         <h5>ACCESSIBILITY</h5>
         <h5>PRIVACY POLICY</h5>
         <h5>TERMS & CONDITIONS</h5>
       </div>
       <h6>@COPYRIGHT</h6>
    </div>);
}

export {Footer};
