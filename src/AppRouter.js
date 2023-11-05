import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import NoPage from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Forgot from "./pages/Forgot";
import { AuthProvider, RequireAuth, IfLoggedIn } from './hooks/authContext';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path="/login" element={<IfLoggedIn><Login /></IfLoggedIn>} />
					<Route path="/signup" element={<IfLoggedIn><Signup /></IfLoggedIn>} />
					<Route path="/forgot" element={<IfLoggedIn><Forgot /></IfLoggedIn>} />
					<Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default AppRouter;
