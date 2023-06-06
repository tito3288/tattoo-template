import React from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavbarComp />
      <div style={{ backgroundColor: "black", height: "100vh" }}></div>
      <div style={{ backgroundColor: "gray", height: "100vh" }}></div>
      <div style={{ backgroundColor: "black", height: "100vh" }}></div>
      <div style={{ backgroundColor: "gray", height: "100vh" }}></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
