import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import './services.scss';
import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<div className='service container' id='services'>
			<h3> Services Overview</h3>
			<div className='serviceButtons'>
				<Link to='/faq'>
					<FontAwesomeIcon icon={faGear} className='gear' />
					<h4>STREAMSOFT</h4>
				</Link>
				<a href='#'>
					<FontAwesomeIcon icon={faUserGear} className='gear' />
					<h4>CUSTOM DESIGNED SOFTWARE</h4>
				</a>
			</div>
		</div>
	);
};

export { Services };
