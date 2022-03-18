import React, {useState} from "react";
import './mobilenavi.scss';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";


const Mobilenavi = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const changeMenu = () => { setMenuOpen(!menuOpen) }

    return(
        <nav className="mobile-navbar">
            <button className="nav-btn" onClick={changeMenu}>MENU</button>
            {menuOpen && (
            <ul className="mobilenavi">
                <li >
                    <Link to='/' className='menuItem'>
                        <span className="a naviLink"> Home</span>
                    </Link>
                </li>
                <li>
                    <HashLink to='/#about' className='menuItem'>
                        <span className="a naviLink"> O firmie</span>
                    </HashLink>
                </li>
                <li>
                    <HashLink to='/#services' className='menuItem'>
                        <span className="a naviLink"> Usługi</span>
                    </HashLink>
                </li>
                <li>
                    <HashLink to='/#gallery' className='menuItem'>
                        <span className="a naviLink"> Galeria</span>
                    </HashLink>
                </li>
                <li>
                    <HashLink to='/#contact' className='menuItem'>
                        <span className="a naviLink">Kontakt</span>
                    </HashLink>
                </li>
                <li>
                    <Link to='/rates' className='menuItem'>
                        <span className="a naviLink transition"> Kursy walut</span>
                    </Link>
                </li>
            </ul> )}
        </nav>
    )
}

export {Mobilenavi};

