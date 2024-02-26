import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import PromoteBanner from "./../../assets/images/promote banner.svg"
import BookCardCarousel from "./Statistic/BookCardCarousel";

const PromoteSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
  };
  const slides = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <section className="promote relative overflow-hidden">
        <h3 className="text-3xl pt-8 pb-5 font-semibold text-center">
          Chương trình khuyến mãi
        </h3>
        <p className="text-sn text-center mb-8">Từ 24/2 đến 14/04</p>
        <Slider {...settings}>
          {slides.map(slide => <BookCardCarousel key={slide}/>)}
        </Slider>
        {/* background  */}
        <div className="absolute top-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image src={PromoteBanner} alt="Picture of the author" />
        </div>
      </section>
    </>
  );
};

export default PromoteSection;
