import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import { useAuthContext } from '../hooks/authContext';
import usePost from '../hooks/usePost';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [name, setName] = useState('');
	const [error,setError] = useState(null);

	const auth = useAuthContext();
	const { loginHandler } = auth;

	const {
		isLoading,
		error: postError,
		sendRequest,
		resetError,
	} = usePost(`${process.env.REACT_APP_BACKEND_URL}/api/register/`);

	const handleSubmit = async (e) => {
		e.preventDefault();

		resetError();

		if (!email) {
			setError('Enter Email!');
			return;
		}

		if(!name){
			setError("Enter Name!");
			return;
		}

		if (!password) {
			setError('Password cannot be empty!');
			return;
		}

		if(password !== password2){
			setError("Passwords do not match!")
		}

		setError('');
		sendRequest({ email, password,password2,name,tc:true }, (data) => {
			//console.log(data);
			loginHandler(data);
		});
	};


	return (
		<div className="auth-container">
			<div className="form-container">
				<h2>Register</h2>
				<input className="auth-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input className="auth-input" type="name" placeholder="Name" value={email} onChange={(e) => setName(e.target.value)} />
				<input className="auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<input className="auth-input" type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
				<button className="auth-button" onClick={handleSubmit}>
					Register
				</button>
				<Link to="/signup">Don't have an account? Sign up</Link>
				{error && <p className="error-message">{error}</p>}
			</div>
		</div>
	);
};

export default Register;
