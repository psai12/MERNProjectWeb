import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import './Catering.css';

function Catering()
{
   return (
    <div className='CateringHeader'>
      <Header/>
      <div className='CateringForm'>
      <h1 className='CateringHeading'>CATERING FORM</h1>
      <h3>We now offer catering on our cakes and pints. If you would like to order Sweet Jesus for your next event, please fill out the form below. 2 weeks lead time required upon order confirmation.
         Provided information below, a representative will be in touch with you to discuss further details.</h3>
      <div className='Section'>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
      </div>
        <div className='Section'>
         <input type='text' placeholder='Email'/>
        </div>
        <div className='Section'>
        <input type='text' placeholder='Phone'/>
        </div>
        <div className='Section'>
        <input type='date' placeholder='Phone'className='date'/>
        </div>
        <div className='Section'>
        <input type='country' placeholder='Country'/>
        </div>
        <div className='Section'>
        <input type='text' placeholder='Address1'/>
        </div>
        <div className='Section'>
        <input type='text' placeholder='Address2'/>
        </div>
        <div className='Section'>
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='Province'/>
        <input type='text' placeholder='Postal Code'/>
        </div>
        <div className='Section'>
        <input type='text' placeholder='How many cakes?'/>
        </div>
        <div className='flexVertical left'>
         <label>Delivery Required?</label>
         <input type='checkbox' className='VerticalGap'/>
         <input type='checkbox' className='VerticalGap'/>
        </div>
        <div className='Section'>
         <input type='text' placeholder='Notes' className='notes'/>
        </div>
        <button className='Submit'>Submit</button>
      </div>
      <Footer/>
    </div>
   );
}

export default Catering;