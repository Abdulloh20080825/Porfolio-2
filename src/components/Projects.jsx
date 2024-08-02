import React from 'react';
import './Projects.css';
import quran from '../img/quran.png';
import pokemon from '../img/pokemon.png';
import youtube from '../img/youtbe.png';
import weather from '../img/weather.png';
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className='projects_content'>
			<h1>My Great Projects</h1>
			<div className='project-items'>
				<Link to={'https://abdulloh-quran-app.vercel.app/'}>
					<div className='project-item'>
						<p>Quran Application</p>
						<img src={quran} alt='Quran Application' width={400} />
					</div>
				</Link>
				<Link to={'https://pokemon-app-five-chi.vercel.app/'}>
					<div className='project-item'>
						<p>Pokemon Application</p>
						<img src={pokemon} alt='Pokemon Application' width={400} />
					</div>
				</Link>
				<Link to={'https://abu-tube.vercel.app/'}>
					<div className='project-item'>
						<p>Youtube Clone</p>
						<img src={youtube} alt='Youtube Application' width={400} />
					</div>
				</Link>
				<Link to={'https://weather-react-js-kohl.vercel.app/'}>
					<div className='project-item'>
						<p>Weather Application</p>
						<img src={weather} alt='Weather Application' width={400} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Projects;
