import React from 'react';
import './NotFound.css'; // Import your CSS file

const NotFound = () => {
	return (
		<div className="not-found-container">
			<h1 className="not-found-title">404 - Page Not Found</h1>
			<p className="not-found-message">The page you are looking for does not exist.</p>
			<a className="not-found-link" href="/">
				Go to Home Page
			</a>
		</div>
	);
};

export default NotFound;
