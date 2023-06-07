import React from "react";
import JotformEmbed from "react-jotform-embed";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import "../Style.css";
import SmoothScroll from "../components/SmoothScroll";

const Contact = () => {
  return (
    //IN ORDER TO MOVE THE IMAGE RIGHT UNDERNEATH THE IMAGE WE HAVE TO GIVE THE IMAGE SOME MARGIN SPECIFICALLY THE TOP IN ORDER TO MOVE IT DOWN FROM THE NAVBAR, IN ALL MEDIA QUERIES.
    <div style={{ height: "100%" }}>
      <SmoothScroll />
      <ScrollToTop />
      <NavbarComp />
      <div className="parallax"></div>
      {/* WHEN USING JOTFORM WE GET A COUPLE OF ERRORS BE AWARE OF THIS */}
      <JotformEmbed src="https://form.jotform.com/231562515624150" />
    </div>
  );
};

export default Contact;
