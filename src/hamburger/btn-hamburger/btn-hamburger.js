import React, {useState} from 'react';
import './btn-hamburger.scss'


const BtnHamburger = () => {
    const [state, setState] = useState('open')
    const toChange = () => {
        if (state === 'open') setState('closed');
        else setState('open')
    }
    return(
        <div className={`menu-btn $(state)`}>
            <button className="btn-burger"onClick={toChange}></button>
        </div>
    )
    
}

export {BtnHamburger};
