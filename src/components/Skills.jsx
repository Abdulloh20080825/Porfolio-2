import React from 'react';
import './Skills.css';
import SkillsBox from './SkillsBox';

const Skills = ({ handleChangeSkill, filterData }) => {
	const level = [
		{
			title: 'Frontend',
			query: 'frontend',
		},
		{
			title: 'Backend',
			query: 'backend',
		},
		{
			title: 'Tools',
			query: 'tools',
		},
	];

	return (
		<div className='skills_content'>
			<div className='usage'>
				<h1>Skills</h1>
				<div className='usage_content'>
					<div className='skill-box'>
						{level.map((item, index) => (
							<SkillsBox
								item={item}
								key={index}
								handleChangeSkill={handleChangeSkill}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='tools_bar'>
				<div className='header_tools_bar'>
					<p>Tools</p>
				</div>
				<div className='skill-bar-items'>
					{filterData?.map((item, index) => (
						<div className='item-skill-bar' key={index}>
							{item?.languages?.map((language, languageIndex) => (
								<p key={languageIndex}>{language}</p>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
