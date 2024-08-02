import React from 'react';
import Me from '../img/me.jpg';
import './Home.css';
import { htmlLogo } from '../icons/icons';
const Home = () => {
	return (
		<>
			<main className='main_content'>
				<div className='main_text'>
					<h1>Abdulloh Qurbonov</h1>
					<h2>Full Stack developer</h2>
					<h3>Experience 6 mouths</h3>
				</div>
				<div className='me_img'>
					<img src={Me} alt='' width={300} />
				</div>
			</main>
		</>
	);
};

export default Home;
