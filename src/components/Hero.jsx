import React from "react";
import bannerImg1 from "../assets/banner1.jpg";
import bannerImg2 from "../assets/banner2.jpg";
import bannerImg3 from "../assets/banner3.webp";
import bannerImg4 from "../assets/banner4.webp";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto mt-4">
      {/* Carousel Container */}
      <div className="carousel w-full rounded-lg">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
          />
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
