import React from 'react';
import './About.css';
import me2 from '../img/photo_2024-07-11_11-05-32.jpg';

const About = () => {
	return (
		<div className='about-container'>
			<div className='about-content'>
				<div className='about-image'>
					<img src={me2} alt='Me' />
				</div>
				<div className='about-text'>
					<h1>About Me</h1>
					<p>
						I'm a Full Stack developer, and I started learning programming in
						April 2023. In February 2024, I learned HTML, CSS, and advanced
						JavaScript. After that, I started learning a JavaScript library
						called React JS and reached an advanced level by April 2024.
					</p>
					<p>
						My first project using React JS was a React calculator. I then moved
						on to developing a React-based Pokemon application and various other
						projects. In June 2024, I decided to expand my skills and started
						learning Python. However, I faced some difficulties and decided to
						shift my focus to learning Node.js and Express.js instead.
					</p>
					<p>
						In just 2 weeks, I was able to learn these frameworks and start
						building full-stack projects. This experience has shown me the
						importance of continuous learning and adapting to new technologies.
						I'm passionate about programming and enjoy the challenge of
						mastering new frameworks and tools to create innovative solutions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
