import { Navbar, Nav, Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="" className="navBac">
        <Container>
          <Navbar.Brand href="#home">Student Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navbar_wrapper">
              <Link to="/createAccount" classname="">Create Account</Link>
              <Link to="/login" className="">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
