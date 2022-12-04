import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserConsumer } from "../Context/CarritoContext";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { useCart } from "react-use-cart";
import { BiCart } from "react-icons/bi";



const NavM = () => {
  const value = useContext(UserConsumer);

  const { isAuthenticated } = useAuth0();
  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://cdna.artstation.com/p/assets/images/images/005/738/698/large/mario-hernandez-de-paz-vapeo-1.jpg?1493398239"
            width="70"
            height="70"
            className="d-inline-block align-top rounded"
          />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-center">
          <h1 class="text-center text-warning fst-italic text-uppercase">VapeoVZ</h1>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar className="justify-content-end">
          {isAuthenticated ? <Profile /> : <></>}
          {isAuthenticated ? <></> : <LoginButton />}
          <Link to="/carrito" className="nav-link text-light">
            <BiCart size="2rem" />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px' }}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>Cart</span>
          </Link>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavM;

