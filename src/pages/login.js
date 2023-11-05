import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Handle login logic here
		console.log(`Logging in with email: ${email} and password: ${password}`);
		if (email !== '' && password !== '') {
			navigate('/dashboard');
		}
	};

	return (
		<div className="auth-container">
			<div className="form-container">
				<h2>Login</h2>
				<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button onClick={handleLogin}>Login</button>
				<Link to="/signup">Don't have an account? Sign up</Link>
			</div>
		</div>
	);
};

export default Login;
