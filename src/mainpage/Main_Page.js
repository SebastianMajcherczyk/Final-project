import React from "react";

import {Banner} from "../banner/Banner";
import {About} from "../about/About";
import {Services} from "../services/Services";
import {Gallery} from "../gallery/Gallery";
import {Contact} from "../contact/Contact";
import {Mobilenavi} from "../hamburger/mobilenavi";



const Main_Page = () => {
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

export {Main_Page};