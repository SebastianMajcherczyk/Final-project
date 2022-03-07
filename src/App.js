
import React, {useEffect} from "react";
import './App.scss';
import {Header} from "./Header";
import {Navi} from "./Navi";
import {Banner} from "./Banner";
import {About} from "./About";
import {Services} from "./services";
import {Gallery} from "./Gallery";
import {Calendar} from "./Calendar";
import {Contact} from "./Contact";



function App() {
    useEffect(() => {
        document.title = "Franz Kruger"
    }, [])
  return (
      <>
    <div className="App">
            <Header/>
            <Navi/>
            <Banner/>
            <About/>
            <Services/>
            <Gallery/>
            {/*<Calendar/>*/}
            <Contact/>
        </div>
      </>
  );
}

export default App;
