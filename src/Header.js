import LogoFK from './media/LogoFK.png';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => (
    <form action="/" method="get" className="search">

        <input
            type="text"
            className="btn-search"
            placeholder="Search"
            name="s"
        />
        <button type="submit" className="magnify"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
);

const Header = () => {

    return (
        <header className={"header"}>
            <div className="container">
                <img src={LogoFK} alt={"Logo Franz Kruger"}/>
                <div>
                    <h3>Phone number</h3>
                    <h3>+48 555 767 676</h3>
                </div>
                <SearchBar/>
            </div>
        </header>
    )

}

export {Header};
