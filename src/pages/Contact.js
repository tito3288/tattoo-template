import React from "react";
import JotformEmbed from "react-jotform-embed";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import "../Style.css";
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../components/Footer";

const bgStyle3 = {
  position: "fixed",
  width: "100%",
  height: "600px",
  top: 0,
  left: 0,
  backgroundImage: `url("https://cdn.shopify.com/s/files/1/0615/9650/0131/articles/tattoo-shop-led-neon-signs-9.png?v=1675217054")`,
  backgroundSize: "cover",
  zIndex: -1,
  // backgroundAttachment: "fixed",
};

const Contact = () => {
  return (
    //IN ORDER TO MOVE THE IMAGE RIGHT UNDERNEATH THE IMAGE WE HAVE TO GIVE THE IMAGE SOME MARGIN SPECIFICALLY THE TOP IN ORDER TO MOVE IT DOWN FROM THE NAVBAR, IN ALL MEDIA QUERIES.
    <div style={{ height: "100%" }}>
      <SmoothScroll />
      <ScrollToTop />
      <NavbarComp />
      <div>
        <div style={bgStyle3}></div>
        <div
          style={{
            position: "relative", // It should be absolutely positioned
            top: "20%", // Place it at the center
            left: "30%",
            transform: "translate(-50%, -50%)", // Necessary to center the text
            color: "white", // Assuming you want white text
            fontSize: "48px", // Set the font size
            textAlign: "left", // Center the text
          }}
        >
          <h1>Contact</h1>
          <h4>Let us hear from you</h4>
        </div>
      </div>
      {/* WHEN USING JOTFORM WE GET A COUPLE OF ERRORS BE AWARE OF THIS */}
      <div style={{ marginTop: "30rem" }}>
        <JotformEmbed src="https://form.jotform.com/231562515624150" />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
