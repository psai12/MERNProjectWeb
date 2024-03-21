import { Header } from "../../Components/Header/Header";
import texture from '../../Assets/texture.jpg';
import cones from '../../Assets/Cones.png';

import './Home.css';
import PicGallery from "../../Components/PicGallery/PicGallery";

import img1 from '../../Assets/1.jpg';
import img2 from '../../Assets/2.jpg';
import img3 from '../../Assets/3.jpg';

import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';
import { Footer } from "../../Components/Footer/Footer";

function Home()
{
    return <div className="HomeParent">
      <Header/>
       <div className="Menu">
        <img src={texture} width="100%" height="100%" className="texture"/>
        <img src={cones} width="800" height="200" className="logo"/>
        <div className="Gallery">
        <PicGallery prop1={{img:img1,title:"BANGIN' BROWNIE",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble",
         id:"BANGIN"}}
         prop2={{img:img2,title:"BIRTHDAY CAKE",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble",
         id:"BIRTHDAY"}}
         prop3={{img:img3,title:"BOUNTY KILLAH",description:"Coconut soft serve ice cream, shredded toasted coconut, dark chocolate sauce",
         id:"BOUNTY"}}/>
        <PicGallery prop1={{img:img4,title:"COOKIES & CREAM",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble",
        id:"COOKIES"}}
         prop2={{img:img5,title:"HELLA HAZELNUT",description:"Chocolate soft serve ice cream, hazelnut-chocolate sauce, wafer cookies, Corn Flakes, toasted pistachios",
         id:"HELLA"}}
         prop3={{img:img6,title:"KRUSTY THE CONE",description:"Vanilla soft serve ice cream, cotton candy, cotton candy sauce, rainbow sprinkles",
         id:"KRUSTY"}}/>
         <PicGallery prop1={{img:img4,title:"COOKIES & CREAM",description:"Chocolate soft serve ice cream, caramel, chocolate sauce, brownie bits, chocolate cookie crumble",
         id:"COOKIES"}}
         prop2={{img:img5,title:"HELLA HAZELNUT",description:"Chocolate soft serve ice cream, hazelnut-chocolate sauce, wafer cookies, Corn Flakes, toasted pistachios"
         , id:"HELLA"}}
         prop3={{img:img6,title:"KRUSTY THE CONE",description:"Vanilla soft serve ice cream, cotton candy, cotton candy sauce, rainbow sprinkles",
         id:"KRUSTY" }}/>
        </div>
        <button type="button" className="Order" onClick={()=>{window.location.href="/OrderOnline"}}>Order Online</button>
       </div>
       <Footer/>
    </div>
}

export {Home};