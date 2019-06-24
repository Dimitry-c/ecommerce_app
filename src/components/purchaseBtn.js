import React , {useEffect}  from 'react';
import '../styles/purchase_btn.scss';
import cart_icon from '../assets/purchase/shopping_cart.svg';


function purchseBtn(props) {
    
    
    const {target} = props;
    return (
        <div className="purchase-btn">
            <a href={target}>
                <img className='cart-icon' src={cart_icon}/>
                <span className='txt'>Purcahse</span>
            </a>
        </div>
    )

}

export default purchseBtn;