import React , {useEffect}  from 'react';
import ShareBtn from "../components/shareBtn";
import beats from '../assets/power_beats.png';
import  "../styles/product_page.scss";


function ProductPage() {
    
    
    // useEffect(()=>{

    // },[]);
    
    return (
        <div className="product-page">
            <div className="product-image-slider">
                <img src={beats}/>
            </div>
            <div className="line"></div>
            <div className="product-main-details">
                <h2 className="title">Beats Studio3 Wireless Noise Canceling Over-Ear Headphones - Matte Black</h2>
                <div className="price"></div>
            </div>
            <div className="product-tabs">
                <input className="tab-btn" type="button" value="Product"/>
                <input className="tab-btn" type="button" value="Details"/>
                <input className="tab-btn" type="button" value="Review"/>
            </div>
            <ShareBtn/>
        </div>
    )

}

export default ProductPage;