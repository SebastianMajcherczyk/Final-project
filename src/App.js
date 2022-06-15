import React, { useEffect, useState } from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Header } from './header/Header';
import { Navi } from './navi/Navi';
import { ExchangeRates } from './exchangerates/ExchangeRates';
import { Main_Page } from './mainpage/Main_Page';
import { Mobilenavi } from './hamburger/mobilenavi';
import { Faq } from './faq/faq';

const CustomRedirect = () => <Redirect path='/' />;
const breakValue = 768;
function App() {
	const [menuType, setMenuType] = useState(
		window.innerWidth > breakValue ? 'full' : 'mobile'
	);
	useEffect(() => {
		document.title = 'Franz Kruger';
	}, []);

	useEffect(() => {
		const resizeListener = () => {
			const newNavType = window.innerWidth > breakValue ? 'full' : 'mobile';
			setMenuType(newNavType);
			//console.log(menuType, newNavType)
			//if(menuType !== newNavType){
			//  setMenuType((prevState) => {
			//     console.log(prevState, newNavType);
			//    return newNavType
			// });
			// }
		};

		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []);
	return (
		<>
			<Router>
				<div className='App'>
					<Header />
					{menuType === 'full' ? <Navi /> : <Mobilenavi />}

					<Switch>
						<Route exact path='/' component={Main_Page}/>
						<Route exact path='/faq' component={Faq} />
						
						<Route exact path='/rates' component={ExchangeRates} />
						<Route exact path='*' component={CustomRedirect} />
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
