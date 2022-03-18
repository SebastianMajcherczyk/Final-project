import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HashLink} from "react-router-hash-link";
import './navi.scss';

const Navi = () => {
    return(

            <nav className="navbar container">
                    <ul className="navi">
                        <li >
                            <Link to='/'>
                                <span className="a naviLink"> Home</span>
                            </Link>
                        </li>
                        <li>
                        <HashLink to='/#about'>
                            <span className="a naviLink"> O firmie</span>
                        </HashLink>
                        </li>
                        <li>
                            <HashLink to='/#services'>
                                <span className="a naviLink"> Usługi</span>
                            </HashLink>
                        </li>
                        <li>
                          <HashLink to='/#gallery'>
                          <span className="a naviLink"> Galeria</span>
                        </HashLink>
                        </li>
                        <li>
                            <HashLink to='/#contact'>
                                <span className="a naviLink">Kontakt</span>
                            </HashLink>
                        </li>
                        <li>
                        <Link to='/rates'>
                          <span className="a naviLink"> Kursy walut</span>
                        </Link>
                        </li>
                    </ul>
            </nav>
    )
}
export {Navi};

