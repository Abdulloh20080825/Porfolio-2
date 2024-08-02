import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';

const Navbar = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<nav className='nav_wrapper'>
				<h1 className='logo'>Time Programming</h1>
				<ul className='list_items'>
					<li className='nav_list_item'>
						<NavLink to={'/'}>Home</NavLink>
					</li>
					<li className='nav_list_item'>
						<NavLink to={'/about'}>About</NavLink>
					</li>
					<li className='nav_list_item'>
						<NavLink to={'/skills'}>Skills</NavLink>
					</li>
					<li className='nav_list_item'>
						<NavLink to={'/projects'}>Projects</NavLink>
					</li>
					<li className='nav_list_item'>
						<NavLink to={'/contact'}>Contact</NavLink>
					</li>
				</ul>
				<div className='nav_toggle'>
					<IoMenu className='icon' onClick={() => setActive(!active)} />
					<button className='nav_btn'>Resume</button>
				</div>
			</nav>
			{active ? (
				<div className='modal'>
					<Modal setActive={setActive} active={active} />
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default Navbar;
