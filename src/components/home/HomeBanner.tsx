"use-client";
import Slider from "react-slick";
import HeroSection from "./HeroSection/HeroSection";
export default function HomeBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="banner" id="banner1">
          <HeroSection />
        </div>
        <div className="banner" id="banner2">
          <HeroSection />
        </div>
        <div className="banner" id="banner3">
          <HeroSection />
        </div>
        <div className="banner" id="banner4">
          <HeroSection />
        </div>
        <div className="banner" id="banner5">
          <HeroSection />
        </div>
        <div className="banner" id="banner6">
          <HeroSection />
        </div>
      </Slider>
    </div>
  );
}
