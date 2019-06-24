import React , {useEffect}  from 'react';
import ShareBtn from "../components/shareBtn";
import beats from '../assets/power_beats.png';
import  "../styles/product_page.scss";
import PurchaseBtn from '../components/purchaseBtn';
import FavoritesBtn from '../components/favoritesBtn';


function ProductPage() {
    
    const getPrice = (price) => {
        let prices = price.toString().split('.');
        let intPrice = prices[0];
        let decimalPrice = prices[1];

        return (<React.Fragment>
            <span className='large-price'>{intPrice}</span>
            <span class='small-price'>{decimalPrice}</span>
            </React.Fragment>)

    }

    
    return (
        <div className="product-page">
            <div className="product-rating"></div>
            <div className="product-image-slider">
                <img className='slider-img' src={beats}/>
                <div className='price'>{getPrice(19.99)}</div>
                <FavoritesBtn/>
            </div>
            <div className="line"></div>
            <div className="product-main-details">
                <h2 className="title">Beats Studio3 Wireless Noise Canceling Over-Ear Headphones - Matte Black</h2>
                <div className="description">Lorem ipsum dolor sit amet, has iusto deserunt nominati et. Soluta populo intellegam ea sit. Id fabulas iudicabit mei, aeque graeco delicatissimi eum at. Mei ut nibh posse, alterum fabulas perfecto eu duo. Alia decore torquatos eum in, nec in lorem congue denique.</div>
                <PurchaseBtn target={'https://amzn.to/2Y9A4Vr'}/>
            </div>

        </div>
    )

}

export default ProductPage;