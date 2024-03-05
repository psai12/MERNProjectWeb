import './Header.css';
import ice from '../../Assets/icecream.png';

function Header()
{
return(
    <div className='HeaderContainer'>
      <div className='NavContainer'>
        <h6>MENU</h6>
        <h6>LOCATIONS</h6>
        <h6>CATERING</h6>
        <img src={ice} width='100' height='100'/>
        <h6>SOCIAL</h6>
        <h6>FRANCHISING</h6>
      </div>
    </div>);
}

export {Header};
