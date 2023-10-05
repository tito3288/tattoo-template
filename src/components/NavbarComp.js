import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";

function BasicExample() {
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.scrollY < 50); // Modify the number here to adjust the scroll distance
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <Container>
      <Navbar
        fixed="top"
        expand="lg"
        style={{
          backgroundColor: isTop ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)",
          transition: "background-color 0.5s ease", // Here's the transition!
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              className="brand"
              style={{ height: "150px", width: "150px", borderRadius: "50%" }}
              src="tattoo-logo.png"
              alt="nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginTop: "20px" }}>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ fontWeight: "bold", padding: "20px", fontSize: "20px" }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "white" : "white",
                  padding: "5px",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "white" : "white",
                  padding: "5px",
                }}
                to="/Contact"
              >
                Contact
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "white" : "white",
                  padding: "5px",
                }}
              >
                Artists
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "white" : "white",
                  padding: "5px",
                }}
                href="#link"
              >
                About Us
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
