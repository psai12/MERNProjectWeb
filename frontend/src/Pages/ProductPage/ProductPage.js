import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import './ProductPage.css';

function ProductPage({prop})
{
    const params = new URLSearchParams(window.location.search);
    const imgSource = params.get('img');
    const description = params.get('description');
return (


    <div className="ProductPageContainer">
    <Header/>
        <div className='ProductDisplay'>
            <img src={imgSource}/>
            <h3>{description}</h3>
        </div>
    <Footer/>
    </div>
);
}

export default ProductPage;