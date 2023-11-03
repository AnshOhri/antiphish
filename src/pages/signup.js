import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSignup = () => {
		if (password !== confirmPassword) {
			alert('Password and Confirm Password must match.');
		} else {
			// Handle signup logic here
			console.log(`Signing up with email: ${email} and password: ${password}`);
		}
	};

	return (
		<div className="form-container">
			<h2>Sign up</h2>
			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
			<button onClick={handleSignup}>Sign up</button>
			<Link to="/login">Already have an account? Log in</Link>
		</div>
	);
};

export default Signup;
