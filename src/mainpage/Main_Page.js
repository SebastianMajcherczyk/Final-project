import React from "react";

import {Banner} from "../banner/Banner";
import {About} from "../about/About";
import {Services} from "../services/Services";
import {Gallery} from "../gallery/Gallery";
import {Contact} from "../contact/Contact";
import {Mobilenavi} from "../hamburger/mobilenavi";
import { Faq } from '../faq/faq';



const Main_Page = () => {
    return(
        <>
            <Banner/>
            <About/>
            <Services/>
            <Gallery/>
            <Contact/>
            <Faq />
        </>
    )
}

export {Main_Page};