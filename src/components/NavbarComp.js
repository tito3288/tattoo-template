import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  return (
    <Container>
      <Navbar fixed="top" expand="lg" style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand
            style={{
              backgroundColor: "black",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "30px",
              margin: "0",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
            href="/"
          >
            Logo
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
                  color: "black",
                  padding: "5px",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "5px",
                }}
                to="/Contact"
              >
                Contact
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "5px",
                }}
                href="#link"
              >
                Menu
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "5px",
                }}
                href="#link"
              >
                About Us
              </Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
