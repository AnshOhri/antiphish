/* eslint-disable react/jsx-no-useless-fragment */
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [authState, setAuthState] = useState(() => {
		const storedToken = localStorage.getItem('phishtoken');
		return storedToken ? JSON.parse(storedToken) : null;
	});

	const isAuth = authState !== null;

	// eslint-disable-next-line no-shadow
	const loginHandler = (token) => {
		setAuthState(token);
		localStorage.setItem('phishtoken', JSON.stringify(token));
		toast.success('Logged-In Successfully');
	};

	const logoutHandler = (noToast = false) => {
		setAuthState(null);
		localStorage.removeItem('phishtoken');
		if (!noToast) toast.success('Logged-Out Successfully');
	};
	const authObject = useMemo(
		() => ({
			isAuth,
			authState,
			loginHandler,
			logoutHandler,
		}),
		[isAuth, authState]
	);

	return (
		<AuthContext.Provider value={authObject}>
			{children}
		</AuthContext.Provider>
	);
}

function RequireAuth({ children }) {
	const location = useLocation();
	const authObject = useAuthContext();

	if (!authObject.isAuth) {
		return <Navigate to='/login' state={{ from: location.pathname }} />;
	}

    console.log('logged in!')

	return <>{children}</>;
}

function IfLoggedIn({ children }) {
	const authObject = useAuthContext();
	const location = useLocation();
	const pathName = location.state?.from || '/dashboard';

	if (authObject.isAuth) {
		return <Navigate to={pathName} state={{ from: location.pathname }} />;
	}

    console.log('a')

	return <>{children}</>;
}

export { AuthProvider, IfLoggedIn, RequireAuth, useAuthContext };