import React , {useEffect}  from 'react';
import '../styles/favorites_btn.scss';
import FullHeart from '../assets/favorites/heart-full.svg';
import EmptyHeart from '../assets/favorites/heart-empty.svg';

function favoritesBtn(props) {
    
    return (
        <div className='favorites-btn'>
            <a className='btn'>
                <img className='favorites-img' src={EmptyHeart}/>
            </a>
        </div>
    )

}

export default favoritesBtn;