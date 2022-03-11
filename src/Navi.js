import React from "react";
import { Link } from 'react-router-dom';
import { HashLink} from "react-router-hash-link";

const Navi = () => {
    return(

            <nav className="container">
                    <ul className="navi">
                        <li >
                            <Link to='/home'>
                                <span className="a naviLink"> Home</span>
                            </Link>
                        </li>
                        <li>
                        <HashLink to='/home#about'>
                            <span className="a naviLink"> O firmie</span>
                        </HashLink>
                        </li>
                        <li>
                            <HashLink to='/home#services'>
                                <span className="a naviLink"> Usługi</span>
                            </HashLink>
                        </li>
                        <li>
                          <HashLink to='/home#gallery'>
                          <span className="a naviLink"> Galeria</span>
                        </HashLink>
                        </li>
                        <li>
                            <HashLink to='/home#contact'>
                                <span className="a naviLink">Kontakt</span>
                            </HashLink>
                        </li>
                        <li>
                        <Link to='/rates'>
                          <span className="a naviLink transition"> Kursy walut</span>
                        </Link>
                        </li>
                    </ul>
            </nav>
    )
}
export {Navi};