import { Header } from '../../Components/Header/Header.js';
import '../Register/Register.css';
import react from 'react';
import {Footer} from '../../Components/Footer/Footer.js';

function Login()
{
    return (
    <div className='RegisterContainer'>
      <Header/>
      <div className='RegisterForm'>
         <h2>Login First!</h2>
         <input type="email" placeholder='Email'/>
         <input type="password" placeholder='Password'/>
         <button>Submit</button>
      </div>
      <Footer/>
    </div>
    );
}

export default Login;