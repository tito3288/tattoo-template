import React from "react";
import JotformEmbed from "react-jotform-embed";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  return (
    //IN ORDER TO MOVE THE IMAGE RIGHT UNDERNEATH THE IMAGE WE HAVE TO GIVE THE IMAGE SOME MARGIN SPECIFICALLY THE TOP IN ORDER TO MOVE IT DOWN FROM THE NAVBAR, IN ALL MEDIA QUERIES.
    <div style={{ height: "100%" }}>
      <ScrollToTop />
      <NavbarComp />
      <img
        src="https://free4kwallpapers.com/uploads/originals/2021/10/17/a-cool-dark-mountain-wallpaper.png"
        alt="contact pic"
        style={{ width: "100%", marginTop: "5%" }}
      />
      {/* WHEN USING JOTFORM WE GET A COUPLE OF ERRORS BE AWARE OF THIS */}
      <JotformEmbed src="https://form.jotform.com/231562515624150" />
    </div>
  );
};

export default Contact;
