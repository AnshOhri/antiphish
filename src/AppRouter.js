import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import NoPage from './pages/NoPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/login" />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;