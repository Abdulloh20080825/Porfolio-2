import React from 'react';
import './SkillsBox.css';

const SkillsBox = ({ item, handleChangeSkill }) => {
	return (
		<div className='skill-box' onClick={() => handleChangeSkill(item.query)}>
			<p className='skill-box-text'>{item.title}</p>
		</div>
	);
};

export default SkillsBox;
