import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";



const Services = () => {
    return (
        <div className="service container">
            <h3> Services Overview</h3>
            <div className="serviceButtons">
                <a href='#'>
                    <FontAwesomeIcon icon={faGear} className="gear"/>
                    <h4>STREAMSOFT</h4>
                </a>
                <a href="#">
                    <h4>CUSTOM DESIGNED SOFTWARE</h4>
                </a>
                </div>
            </div>
    )
}

export {Services};