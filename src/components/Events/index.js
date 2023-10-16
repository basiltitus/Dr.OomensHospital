import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { heroHome, mobileBG, visionImgUrl } from "../../Constants";
import AppBar from "../Utilities/AppBar";
import Footer from "../Utilities/Footer";
import Topbar from "../Utilities/Topbar";
import AnimatedCard from "./AnimatedCard";
import { upcoming, newsList, memoriesList } from "./EventsList";
import ImgViewer from "./ImgViewer";
import "./index.css";

export default function Events() {
  const activateViewer=(imgUrl)=>{
    setSelectedImg(imgUrl)
    setShowViewer(true);
  }
  const chunkSize = 3;
  const [Upcoming, setUpcoming] = React.useState();
  const [NewsList, setNews] = React.useState();
  const [MemoresList, setMemories] = React.useState();
  const [showViewer,setShowViewer]=React.useState(false);
  const [selectedImg,setSelectedImg]=React.useState('');
  useEffect(() => {
    const chunkedUpcoming = Array.from(
      { length: Math.ceil(upcoming.length / chunkSize) },
      (v, i) => upcoming.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    const chunkedNews = Array.from(
      { length: Math.ceil(newsList.length / chunkSize) },
      (v, i) => newsList.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    const chunkedMemories = Array.from(
      { length: Math.ceil(memoriesList.length / chunkSize) },
      (v, i) => memoriesList.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    setUpcoming(chunkedUpcoming);
    setNews(chunkedNews);
    setMemories(chunkedMemories);
  }, []);
  return (
    <div>
      <Topbar />
      <AppBar />
      <ImgViewer show={showViewer} setShow={setShowViewer} imgUrl={selectedImg}/>
      <div className="events-container">
        <div class="hero-image-event">
          <img className="desktop-view" src={heroHome} alt="Example Image" />
          <img className="mobile-view" src={heroHome} alt="Example Image" />
          <div class="hero-text-event">
            <h1>Events and News</h1>
            <p >
              Checkout this page to learn more about the latest events and news
            </p>
          </div>
        </div>
        <span className="desktop-view">
          <h1 class="attractive-heading">Gallery</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {Upcoming != null &&
              Upcoming.map((chunk, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                      {chunk.map((item) => {
                        return (
                          <AnimatedCard
                        heading={item.heading}
                        caption={item.caption}
                        imgUrl={item.imgUrl}
                        onClick={()=>activateViewer(item.imgUrl)}
                      />
                        );
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>

          <h1 class="attractive-heading">Facilities</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {NewsList != null &&
              NewsList.map((chunk, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                      {chunk.map((item) => {
                        return (
                          <AnimatedCard
                        heading={item.heading}
                        caption={item.caption}
                        imgUrl={item.imgUrl}
                        onClick={()=>activateViewer(item.imgUrl)}
                      />
                        );
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>

          {/* <h1 class="attractive-heading">Memories</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {MemoresList != null &&
              MemoresList.map((chunk, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                      {chunk.map((item) => {
                        return (
                          <AnimatedCard
                            heading={item.title}
                            caption={item.caption}
                            imgUrl={item.imgUrl}
                            onClick={()=>activateViewer(item.imgUrl)}
                          />
                        );
                      })}
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel> */}
        </span>
        <span className="mobile-view">
          <h1 class="attractive-heading">Gallery</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {upcoming != null &&
              upcoming.map((item, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                    <AnimatedCard
                        heading={item.heading}
                        caption={item.caption}
                        imgUrl={item.imgUrl}
                        onClick={()=>activateViewer(item.imgUrl)}
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>

          <h1 class="attractive-heading">Facilities</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {newsList != null &&
              newsList.map((item, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                      <AnimatedCard
                        heading={item.heading}
                        caption={item.caption}
                        imgUrl={item.imgUrl}
                        onClick={()=>activateViewer(item.imgUrl)}
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel>

          {/* <h1 class="attractive-heading">Memories</h1>
          <Carousel autoPlay={true} interval={2000} indicators={false}>
            {memoriesList != null &&
              memoriesList.map((item, index) => {
                return (
                  <Carousel.Item>
                    <div className="card-wrapper container-sm d-flex   justify-content-around">
                      <AnimatedCard
                        heading={item.title}
                        caption={item.caption}
                        imgUrl={item.imgUrl}
                        onClick={()=>activateViewer(item.imgUrl)}
                      />
                    </div>
                  </Carousel.Item>
                );
              })}
          </Carousel> */}
        </span>
      </div>
      <Footer />
    </div>
  );
}
