import React from "react";

const Navi = () => {
    return(

            <div className="container">
                    <ul className="navi">
                        <li >
                          <a href="#" className="naviLink" id="home"> Home</a>
                        </li>
                        <li>
                          <a href="#about" className="naviLink transition">About</a>
                        </li>
                        <li>
                          <a href="#services" className="naviLink transition">Services</a>
                        </li>
                        <li>
                          <a href="#gallery" className="naviLink transition">Gallery</a>
                        </li>
                        {/*<li>*/}
                        {/*  <a href="#team" className="naviLink transition">Team</a>*/}
                        {/*</li>*/}
                        <li>
                          <a href="#contact" className="naviLink transition">Contact</a>
                        </li>
                    </ul>
            </div>
    )
}
export {Navi};