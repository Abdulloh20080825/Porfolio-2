import React from 'react';
import './About.css';
import me2 from '../img/photo_2024-07-11_11-05-32.jpg';

const About = () => {
	return (
		<>
			<div className='about_content'>
				<div className='me_img'>
					<img src={me2} alt='Me' />
				</div>
				<div>
					<h1>About Us</h1>
					<p className='about_text'>
						{' '}
						I'm Full Stack developer. Started learning programming in April
						2023. and 2024 in February I learned HTML CSS and advanced
						JavaScript after that I started learning a JavaScript Library called
						React JS and learned it 2024 in April to the Advanced level then I
						started making projects my first project on React Js was a React
						calculator after I started making React Pokemon and so I started
						doing all sorts of projects and then at the beginning of June 2024 I
						started learning Python, my goal was to learn backed and code in
						Python but I had difficulties and I stopped studying and started
						learning Node Js Express Js and literally in 2 weeks I learned these
						Frameworks and started doing Full Stack projects, that's how I
						continue to learn new Frameworks
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
