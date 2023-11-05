import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthContext } from '../hooks/authContext';

const NavbarCom = () => {
	const auth = useAuthContext();
	const { logoutHandler } = auth;

	return (
		<Navbar bg="dark" sticky="top" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="#home">Team Alt + F4</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
				</Nav>
				<Nav className="me-auto">
					<Nav.Link href="#home" onClick={logoutHandler}>Sign Out</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavbarCom;