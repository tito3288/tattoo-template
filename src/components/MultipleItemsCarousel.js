import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultipleItemsCarousel = () => {
  return (
    <div style={{ paddingTop: "10rem", paddingBottom: "10rem" }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s ease"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
            style={{ width: "300px", height: "500px" }}
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/2019/09/W5rai2bUkU9A9Dequz2xezqTQE4fV56mpIBROaWC.jpg?w=400"
            style={{ width: "300px", height: "500px" }}
            alt="Image 2"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
            style={{ width: "300px", height: "500px" }}
            alt="Image 3"
          />
        </div>
        <div>
          <img
            src="https://tattoosme.com/wp-content/uploads/Best-lion-tattoos-designs-ideas-51.jpg"
            style={{ width: "300px", height: "500px" }}
            alt="Image 4"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxHoRkxQCxL-53B5W4rXMqmnHFn5Ai2VyXQ&usqp=CAU"
            style={{ width: "300px", height: "500px" }}
            alt="Image 5"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MultipleItemsCarousel;
