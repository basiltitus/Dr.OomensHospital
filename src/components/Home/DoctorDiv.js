import React, { useEffect, useRef } from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import {
  doctor1Caption,
  doctor1Img,
  doctor1Name,
  doctor2Caption,
  doctor2Img,
  doctor2Name,
  doctorDivCaption,
} from "../../Constants";
import DoctorCard from "./DoctorCard";
import "./Doct.css";
import { DoctorList } from "./DoctorList";
import ItemsCarousel from "react-items-carousel";

export default function DoctorDiv() {
  return (
    <Container fluid className="doctorDiv">
      <h1 className="fw800 PrimaryColour">Meet Our Team</h1>
      <h2 className="hw700 SecColour">We Devote Ourselves for you</h2>
      <DoctorCard
      isOwner={true}
        doctorImg={DoctorList[0].imgUrl}
        doctorName={DoctorList[0].name}
        doctorCaption={DoctorList[0].position}
        doctorCaption2={DoctorList[0].position2}
      />
      <span className="desktop-view ">
        <Carousel autoPlay={true} interval={2000} indicators={false}>
          <Carousel.Item>
            <div class="card-wrapper container-sm d-flex   justify-content-around">
              <DoctorCard
                doctorImg={DoctorList[1].imgUrl}
                doctorName={DoctorList[1].name}
                doctorCaption={DoctorList[1].position}
              />
              <DoctorCard
                doctorImg={DoctorList[2].imgUrl}
                doctorName={DoctorList[2].name}
                doctorCaption={DoctorList[2].position}
              />
              <DoctorCard
                doctorImg={DoctorList[3].imgUrl}
                doctorName={DoctorList[3].name}
                doctorCaption={DoctorList[3].position}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="card-wrapper container-sm d-flex   justify-content-around">
              <DoctorCard
                doctorImg={DoctorList[4].imgUrl}
                doctorName={DoctorList[4].name}
                doctorCaption={DoctorList[4].position}
              />
              <DoctorCard
                doctorImg={DoctorList[5].imgUrl}
                doctorName={DoctorList[5].name}
                doctorCaption={DoctorList[5].position}
              />
              <DoctorCard
                doctorImg={DoctorList[6].imgUrl}
                doctorName={DoctorList[6].name}
                doctorCaption={DoctorList[6].position}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="card-wrapper container-sm d-flex   justify-content-around">
              <DoctorCard
                doctorImg={DoctorList[7].imgUrl}
                doctorName={DoctorList[7].name}
                doctorCaption={DoctorList[7].position}
              />
              <DoctorCard
                doctorImg={DoctorList[8].imgUrl}
                doctorName={DoctorList[8].name}
                doctorCaption={DoctorList[8].position}
              />
              <DoctorCard
                doctorImg={DoctorList[9].imgUrl}
                doctorName={DoctorList[9].name}
                doctorCaption={DoctorList[9].position}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="card-wrapper container-sm d-flex   justify-content-around">
              <DoctorCard
                doctorImg={DoctorList[10].imgUrl}
                doctorName={DoctorList[10].name}
                doctorCaption={DoctorList[10].position}
              />
              <DoctorCard
                doctorImg={DoctorList[11].imgUrl}
                doctorName={DoctorList[11].name}
                doctorCaption={DoctorList[11].position}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </span>
      <span class="mobile-view">
        <Carousel autoPlay={true} interval={2000} indicators={false}>
          {DoctorList.map((item,index) => {
           return (index != 0 &&<CarouselItem>
              <div class="card-wrapper container-sm d-flex   justify-content-around">
                <DoctorCard
                  doctorImg={item.imgUrl}
                  doctorName={item.name}
                  doctorCaption={item.position}
                />
              </div>
            </CarouselItem>
          )})}
        </Carousel>
      </span>
    </Container>
  );
}
