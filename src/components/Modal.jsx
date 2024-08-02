import React from 'react';
import { NavLink } from 'react-router-dom';
import './Modal.css';
import { IoClose } from 'react-icons/io5';

const Modal = ({ setActive, active }) => {
	return (
		<div className='modal'>
			<IoClose className='close-icon' onClick={() => setActive(!active)} />
			<ul className={`Modal_navigate`}>
				<li className='modal_navigate' onClick={() => setActive(!active)}>
					<NavLink to={'/'}>Home</NavLink>
				</li>
				<li className='modal_navigate'>
					<NavLink to={'/about'} onClick={() => setActive(!active)}>
						About
					</NavLink>
				</li>
				<li className='modal_navigate' onClick={() => setActive(!active)}>
					<NavLink to={'/skills'}>Skills</NavLink>
				</li>
				<li className='modal_navigate' onClick={() => setActive(!active)}>
					<NavLink to={'/projects'}>Projects</NavLink>
				</li>
				<li className='modal_navigate' onClick={() => setActive(!active)}>
					<NavLink to={'/contact'}>Contact</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Modal;
