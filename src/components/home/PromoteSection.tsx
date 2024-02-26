import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import PromoteBanner from "./../../assets/images/promote banner.svg"
import BookCardCarousel from "./BookCardCarousel";

const PromoteSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="promote relative">
        <h3 className="text-2xl font-semibold text-center">
          Chương trình khuyến mãi
        </h3>
        <p className="text-sn text-center mt-3">Từ 24/2 đến 14/04</p>
        <Slider {...settings}>
          <div>
            <BookCardCarousel/>
          </div>
          <div>
            <BookCardCarousel/>
          </div>
          <div>
            <BookCardCarousel/>
          </div>
          <div>
            <BookCardCarousel/>
          </div>
          <div>
            <BookCardCarousel/>
          </div>
          <div>
            <BookCardCarousel/>
          </div>
        </Slider>
        <div className="absolute top-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image src={PromoteBanner} alt="Picture of the author" />
        </div>
      </section>
    </>
  );
};

export default PromoteSection;
