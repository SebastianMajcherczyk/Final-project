import React from "react";

import {Banner} from "./Banner";
import {About} from "./About";
import {Services} from "./services";
import {Gallery} from "./Gallery";
// import {Calendar} from "./Calendar";
import {Contact} from "./Contact";



const Components = () => {
    return(
        <>
        <Banner/>
        <About/>
        <Services/>
        <Gallery/>
        <Contact/>
        </>
    )
}

export {Components};