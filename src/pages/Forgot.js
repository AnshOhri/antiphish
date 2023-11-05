import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/authContext';
import usePost from '../hooks/usePost';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error,setError] = useState(null);

	const auth = useAuthContext();
	const { loginHandler } = auth;

	const {
		isLoading,
		error: postError,
		sendRequest,
		resetError,
	} = usePost(`${process.env.REACT_APP_BACKEND_URL}/api/login/`);

	const handleSubmit = async (e) => {
		e.preventDefault();

		resetError();

		if (!email) {
			setError('Enter Email or username!');
			return;
		}

		if (!password) {
			setError('Password cannot be empty!');
			return;
		}

		setError('');
		sendRequest({ email, password }, (data) => {
			console.log(data);
			loginHandler(data);
		});
	};


	return (
		<div className="auth-container">
			<div className="form-container">
				<h2>Login</h2>
				<input className="auth-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input className="auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button className="auth-button" onClick={handleSubmit}>
					Login
				</button>
				<Link to="/signup">Don't have an account? Sign up</Link>
				{error && <p className="error-message">{error}</p>}
			</div>
		</div>
	);
};

export default Login;
