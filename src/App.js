
import './App.scss';
import {Header} from "./Header";
import {Navi} from "./Navi";
import {Banner} from "./Banner";
import {About} from "./About";
import {Services} from "./services";
import {Gallery} from "./Gallery";
import {Calendar} from "./Calendar";

function App() {
  return (
      <>
    <div className="App">
            <Header/>
            <Navi/>
            <Banner/>
            <About/>
            <Services/>
            <Gallery/>
            <Calendar/>
        </div>
      </>
  );
}

export default App;
