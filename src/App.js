import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { skills } from './constants/skill';

const App = () => {
	const [filterData, setFilterData] = useState([...skills]);

	const handleChangeSkill = (query) => {
		const filter = skills.filter((x) => x.query === query);
		setFilterData(filter);
	};

	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/skills'
					element={
						<Skills
							handleChangeSkill={handleChangeSkill}
							filterData={filterData.slice(0, 1)}
						/>
					}
				/>
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
};

export default App;
