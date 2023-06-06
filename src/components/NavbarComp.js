import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
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
            href="#home"
          >
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ marginTop: "20px" }}>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{ fontWeight: "bold", padding: "20px", fontSize: "20px" }}
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
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
