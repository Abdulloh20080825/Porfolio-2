import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact-container'>
			<h2>Contact Us</h2>
			<div className='contact-form'>
				<form>
					<div className='form-group'>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							id='name'
							name='name'
							autoComplete='off'
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
							name='email'
							autoComplete='off'
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message:</label>
						<textarea id='message' name='message' required></textarea>
					</div>
					<button type='submit' className='submit-btn'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
