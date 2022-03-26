
import React, {useEffect} from "react";
import './App.scss';
import  {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from "./header/Header";
import {Navi} from "./navi/Navi";
import {ExchangeRates} from "./exchangerates/ExchangeRates";
import {Main_Page} from "./mainpage/Main_Page";
import {Mobilenavi} from "./hamburger/mobilenavi";

const CustomRedirect = () => <Redirect path="/"/>

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
                <Mobilenavi/>

                    <Switch>
                        <Route exact path="/"  component={Main_Page}/>
                        <Route exact path="/rates"  component={ExchangeRates}/>
                        <Route exact path="*"  component={CustomRedirect}/>
                    </Switch>

                </div>
        </Router>
      </>
  );
}

export default App;
