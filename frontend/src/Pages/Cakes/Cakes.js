import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import './Cakes.css';


import  cake1 from '../../Assets/cake1.jpg';
import cake2 from '../../Assets/cake2.jpg';
import cake3 from '../../Assets/cake3.jpg';

import cake4 from '../../Assets/cake4.jpg';
import cake5 from '../../Assets/cake5.jpg';
import cake6 from '../../Assets/cake6.png';
import PicGallery from '../../Components/PicGallery/PicGallery.js';

import texture from '../../Assets/texture.jpg';
import cakes from '../../Assets/cakes.png';

function Cakes()
{
    return (
        <div>
         <Header/>
         <div className="Menu">
        <img src={texture} width="100%" height="100%" className="texture"/>
        <img src={cakes} width="800" height="200" className="logo"/>
        <div className="Gallery">
        <PicGallery prop1={{img:cake1,title:"BANGIN' BROWNIE",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble"}}
         prop2={{img:cake2,title:"BIRTHDAY CAKE",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble"}}
         prop3={{img:cake3,title:"BOUNTY KILLAH",description:"Coconut soft serve ice cream, shredded toasted coconut, dark chocolate sauce"}}/>
        <PicGallery prop1={{img:cake4,title:"COOKIES & CREAM",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble"}}
         prop2={{img:cake5,title:"HELLA HAZELNUT",description:"Chocolate soft serve ice cream, hazelnut-chocolate sauce, wafer cookies, Corn Flakes, toasted pistachios"}}
         prop3={{img:cake6,title:"KRUSTY THE CONE",description:"Vanilla soft serve ice cream, cotton candy, cotton candy sauce, rainbow sprinkles"}}/>
         <PicGallery prop1={{img:cake5,title:"COOKIES & CREAM",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble"}}
         prop2={{img:cake1,title:"HELLA HAZELNUT",description:"Chocolate soft serve ice cream, hazelnut-chocolate sauce, wafer cookies, Corn Flakes, toasted pistachios"}}
         prop3={{img:cake2,title:"KRUSTY THE CONE",description:"Vanilla soft serve ice cream, cotton candy, cotton candy sauce, rainbow sprinkles"}}/>
        </div>
        <button type="button" className="Order" onClick={()=>{window.location.href="/OrderOnline"}}>Order Online</button>
       </div>
         <Footer/>
        </div>
        );
}

export default Cakes;