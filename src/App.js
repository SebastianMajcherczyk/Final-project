
import React, {useEffect} from "react";
import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from "./Header";
import {Navi} from "./Navi";
import {ExchangeRates} from "./ExchangeRates";
import {Components} from "./Components";




function App() {

    useEffect(() => {
        document.title = "Franz Kruger"
    }, [])
  return (
      <>
        <Router>
            <div className="App">
                <Header/>
                <Navi/>

                    <Switch>
                        <Route exact path="/home"  component={Components}/>
                        <Route exact path="/rates"  component={ExchangeRates}/>
                    </Switch>

                </div>
        </Router>
      </>
  );
}

export default App;
