import React, { useState } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignup = () => {
		// Handle signup logic here
		console.log(`Signing up with email: ${email} and password: ${password}`);
	};

	return (
		<div className="form-container">
			<h2>Sign up</h2>
			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleSignup}>Sign up</button>
		</div>
	);
};

export default Signup;
