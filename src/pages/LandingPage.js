import React from "react";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Spline from "@splinetool/react-spline";
import ExtraComp from "../components/ExtraComp";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const bgStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  backgroundImage: `url("https://slavetotheneedle.com/wp-content/uploads/2023/01/locations-background-sepia-1.webp")`,
  backgroundSize: "cover",
  zIndex: -5,
};

const LandingPage = () => {
  return (
    <div>
      <NavbarComp />
      <div
        className="video-component"
        style={{
          position: "relative",
          height: "100vh", // This will fill the height of the viewport
          overflow: "hidden", // This will prevent the video from overflowing the div
        }}
      >
        <video
          preload="auto"
          loop
          autoPlay
          muted
          playsInline
          className="video"
          style={{
            width: "100%", // This will make the video responsive
            objectFit: "cover", // This will handle the zoom effect
            objectPosition: "center", // This will center the zoom
          }}
        >
          <source src="tattoo-video.mp4" type="video/mp4" />
        </video>
        <div
          className="video-content"
          style={{
            position: "absolute",
            zIndex: "2",
            color: "white",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1>Website Title Here</h1>
          <p>This will be the paragraph, or a tagline for the business</p>
        </div>
      </div>
      <div className="custom-shape-divider-top-1687533307">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div style={bgStyle}></div>
      <Container style={{ paddingTop: "10rem", paddingBottom: "1px" }}>
        <Row
          lg={1}
          md={1}
          sm={1}
          xs={1}
          className="gx-1"
          style={{
            textAlign: "center",
            paddingBottom: "30px",
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          <Col
            style={{
              textAlign: "center",
              paddingBottom: "30px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                width: "44rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
              }}
            >
              <Card.Img
                variant="top"
                style={{ padding: "15px" }}
                src="https://cdn.shopify.com/s/files/1/0615/9650/0131/articles/tattoo-shop-led-neon-signs-9.png?v=1675217054"
              />
              <Card.Body>
                <Card.Title>Tattoo Shop</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="threeD-row-div">
          <Row
            lg={3}
            md={1}
            sm={1}
            xs={1}
            className="gx-5"
            style={{ width: "100%", margin: "0", padding: "0" }}
          >
            <Col className="my-4">
              <Card
                style={{
                  width: "20rem",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c98eb1e4973ff180169afdf8403c2e1~c5_720x720.jpeg?x-expires=1687503600&x-signature=VZNewiOcIkpEaREZMPBl4ZN9x94%3D"
                  style={{ padding: "30px" }}
                />
                <Card.Body>
                  <Card.Title>Artist #1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    href="https://www.instagram.com/vinda_lavida/"
                    style={{ color: "white" }}
                  >
                    <InstagramIcon style={{ fontSize: "35px" }} />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-4">
              <Card
                style={{
                  width: "20rem",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c98eb1e4973ff180169afdf8403c2e1~c5_720x720.jpeg?x-expires=1687503600&x-signature=VZNewiOcIkpEaREZMPBl4ZN9x94%3D"
                  style={{ padding: "30px" }}
                />
                <Card.Body>
                  <Card.Title>Artist #2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a>
                    <InstagramIcon style={{ fontSize: "35px" }} />
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-4">
              <Card
                style={{
                  width: "20rem",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/8c98eb1e4973ff180169afdf8403c2e1~c5_720x720.jpeg?x-expires=1687503600&x-signature=VZNewiOcIkpEaREZMPBl4ZN9x94%3D"
                  style={{ padding: "30px" }}
                />
                <Card.Body>
                  <Card.Title>Artist #3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a>
                    <InstagramIcon style={{ fontSize: "35px" }} />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Spline
          className="spline-component"
          scene="https://prod.spline.design/6Y4sBwEg2eqgvqNo/scene.splinecode"
        />
      </div>
      {/* SEPARATE  */}
      <div style={{ paddingBottom: "10rem" }}>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all 1s ease"
          transitionDuration={3000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          className="carousel"
        >
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
              className="carousel-image"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              src="https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/2019/09/W5rai2bUkU9A9Dequz2xezqTQE4fV56mpIBROaWC.jpg?w=400"
              className="carousel-image"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
              className="carousel-image"
              alt="Image 3"
            />
          </div>
          <div>
            <img
              src="https://tattoosme.com/wp-content/uploads/Best-lion-tattoos-designs-ideas-51.jpg"
              className="carousel-image"
              alt="Image 4"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
              className="carousel-image"
              alt="Image 5"
            />
          </div>
        </Carousel>
      </div>
      <ExtraComp />
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2978.035725097702!2d-86.3121021!3d41.700602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88112d8cefe65edb%3A0xdd963db3edced466!2sSouth+Bend+International+Airport+(SBN)!5e0!3m2!1sen!2sus!4v1654599876543!5m2!1sen!2sus"
          width="100%"
          height="500"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
