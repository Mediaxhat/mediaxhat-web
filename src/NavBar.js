import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./M.png";
import "./NavBar.css"
function NavBar() {
  return (
    <><Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="30" height="30" alt="Logo"></img>
          <span id="Mediaxhat">Mediaxhat</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
