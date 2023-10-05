import { useState, useEffect } from "react";
import "../Extra.css";

const bgStyle2 = {
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: `url("https://www.sidneyjames.com/media/6374baf4abb1c79ae3596277/original.webp")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  fontSize: "40px",
  textAlign: "center",
  fontWeight: "bold",
  color: "black",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  height: "900px",
};

const ExtraComp = () => {
  //   const [offsetY, setOffsetY] = useState(0);

  //   const handleScroll = () => setOffsetY(window.pageYOffset);

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <div style={containerStyle}>
      <div className="background"></div>
      <div style={textStyle}>
        Anything else to add can go here, images, products or text like
        prices/packages
      </div>
    </div>
  );
};

export default ExtraComp;
