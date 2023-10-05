import { Container } from "react-bootstrap";
import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => (
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  <Container
    fluid
    style={{
      backgroundColor: "#100F0F",
      textAlign: "center",
      padding: "50px 20px",
      bottom: "0",
      width: "100%",
      color: "white",
    }}
  >
    <p>© {currentYear} Tattoo Shop</p>
    <p
      style={{ color: "white", textAlign: "left", margin: "0" }}
      className="my-2"
    >
      Terms of Service
    </p>
    <p style={{ color: "white", textAlign: "left" }}>Contact</p>
  </Container>
);

export default Footer;
