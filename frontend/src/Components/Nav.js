import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../Context/CarritoContext";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";

const NavM = () => {
  const value = useContext(UserConsumer);

  const { isAuthenticated } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://www.bkstradeline.com/skin/frontend/default/netbiz//img/vape-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Vapeo
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="#features">Contacto</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {isAuthenticated ? <Profile /> : <></>}
          {isAuthenticated ? <></> : <LoginButton />}
          <Link to="/carrito" className="nav-link waves-effect waves-light">
            <Navbar.Text>
              <i className="fa fa-shopping-cart"></i>
              <span className="badge bg-danger ms-1">
                {value.carrito.length}
              </span>
            </Navbar.Text>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavM;
