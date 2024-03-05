import { Header } from "../../Components/Header/Header";
import texture from '../../Assets/texture.jpg';
import cones from '../../Assets/Cones.png';

import './Home.css';
function Home()
{
    return <div className="HomeParent">
      <Header/>
       <div className="Menu">
        <img src={texture} width="100%" height="100%"/>
        <img src={cones} width="800" height="200" className="logo"/>

       </div>
    </div>
}

export {Home};