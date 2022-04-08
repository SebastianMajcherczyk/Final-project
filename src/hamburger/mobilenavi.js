import React, {useState} from "react";
import './mobilenavi.scss';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faGear, faXmark} from "@fortawesome/free-solid-svg-icons";
import {BtnHamburger} from './btn-hamburger/btn-hamburger';



const Mobilenavi = () => {
    const [menuOpen, setMenuOpen] = useState(undefined);
    const changeMenu = () => {
        setMenuOpen(!menuOpen);
    }
    

    return(
        <nav className={`mobile-navbar ${menuOpen === undefined ? '' : menuOpen ? 'open' : 'hidden'}`} >
            <div className="menu-btn"  onClick={changeMenu}>
                <button className="btn-burger"></button>
            </div>
            {/*Hambrger menu created from Fontawesome Icons*/}
            {/*<button className="nav-btn" onClick={changeMenu}><FontAwesomeIcon icon={menuOpen  ? faXmark : faBars} /></button>*/}

            <ul className={`mobilenavi ${menuOpen === undefined ? '' : menuOpen ? 'open' : 'hidden'}`} >
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
            </ul>
        </nav>

    )
}

export {Mobilenavi};

