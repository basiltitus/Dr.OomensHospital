import React from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import { spectacleBg, visionImgUrl } from "../../Constants";
import "./CarouselCard.css";
import CarouselObj from "./CarouselObj";
import { ServiceList } from "./ServiceList";
const CarouselCard = () => {
  return (
    <Container fluid id="carousel-card">
      <img src={spectacleBg} className="img-title" />
      <div className="content">
        <h1 className="content-title">Our Services</h1>
        <h5>For better picture</h5>
        <hr></hr>
        <div className="container-style">
          <span className="desktop-view">
            <Carousel autoPlay={true} interval={2000} indicators={false}>
              <Carousel.Item>
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                  <CarouselObj
                    title={ServiceList[0].title}
                    caption={ServiceList[0].caption}
                    imgUrl={ServiceList[0].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[1].title}
                    caption={ServiceList[1].caption}
                    imgUrl={ServiceList[1].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[2].title}
                    caption={ServiceList[2].caption}
                    imgUrl={ServiceList[2].imgUrl}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                  <CarouselObj
                    title={ServiceList[3].title}
                    caption={ServiceList[3].caption}
                    imgUrl={ServiceList[3].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[4].title}
                    caption={ServiceList[4].caption}
                    imgUrl={ServiceList[4].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[5].title}
                    caption={ServiceList[5].caption}
                    imgUrl={ServiceList[5].imgUrl}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                  <CarouselObj
                    title={ServiceList[6].title}
                    caption={ServiceList[6].caption}
                    imgUrl={ServiceList[6].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[7].title}
                    caption={ServiceList[7].caption}
                    imgUrl={ServiceList[7].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[8].title}
                    caption={ServiceList[8].caption}
                    imgUrl={ServiceList[8].imgUrl}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                  <CarouselObj
                    title={ServiceList[9].title}
                    caption={ServiceList[9].caption}
                    imgUrl={ServiceList[9].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[10].title}
                    caption={ServiceList[10].caption}
                    imgUrl={ServiceList[10].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[11].title}
                    caption={ServiceList[11].caption}
                    imgUrl={ServiceList[11].imgUrl}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div class="card-wrapper container-sm d-flex   justify-content-around">
                  <CarouselObj
                    title={ServiceList[12].title}
                    caption={ServiceList[12].caption}
                    imgUrl={ServiceList[12].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[13].title}
                    caption={ServiceList[13].caption}
                    imgUrl={ServiceList[13].imgUrl}
                  />
                  <CarouselObj
                    title={ServiceList[14].title}
                    caption={ServiceList[14].caption}
                    imgUrl={ServiceList[14].imgUrl}
                  />
                </div>
              </Carousel.Item>
              <br />
            </Carousel>
          </span>
          <span className=" mobile-view">
            <Carousel autoPlay={true} interval={2000} indicators={false}>
              {ServiceList.map((item) => (
                <Carousel.Item>
                  <div class="card-wrapper container-sm d-flex   justify-content-around">
                    <CarouselObj
                      title={item.title}
                      caption={item.caption}
                      imgUrl={item.imgUrl}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </span>
        </div>
      </div>
    </Container>
  );
};
export default CarouselCard;
