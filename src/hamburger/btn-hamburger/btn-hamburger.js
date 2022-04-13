import React, {useState} from 'react';
import './btn-hamburger.scss'


const BtnHamburger = (props) => {

    return(
        <div className='menu-btn'>
            <button className="btn-burger"  onClick={props.toChange}></button>
        </div>
    )
    
}

export {BtnHamburger};
