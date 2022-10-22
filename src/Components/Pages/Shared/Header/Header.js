import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import LeftNav from "../LeftNav/LeftNav";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
// console.log(user);

  // LogOutHandler 
  const LogOutHandler = () => {
    logOut()
    .then(()=>{})
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
          <Nav>
            <Link to="/profile">
                {
                  user?.uid ?
                  <>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                    <span>{user?.displayName}</span>
                    </div>
                    <div>
                    {
                    user?.photoURL ?
                    <>
                    <Image
                    roundedCircle
                    src={user?.photoURL}
                    style={{height:"30px", width:"30px"}}
                    />
                    
                    </>
                    : 
                    <FaUser/>
                    }
                    <Button onClick={LogOutHandler} className="ms-4">Log Out</Button>
                    </div>
                  </div>
                  </>
                  :
                  <>
                  <Link className="me-5 text-light text-decoration-none fs-5" to="/logIn">Log In</Link>
                  <Link className="text-light text-decoration-none fs-5" to="/register">Register</Link>
                  </>
                }
            </Link>
          </Nav>
          </div>
          <div className="collapsed-news d-lg-none">
            <LeftNav></LeftNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
