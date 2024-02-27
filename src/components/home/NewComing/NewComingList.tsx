'use client';
import Slider from "react-slick";
import NewBook from "./NewBook";

const NewComingList = () => {
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="container mx-auto mb-20">
      <h3 className="text-3xl pt-8 pb-10 font-semibold">Chương trình khuyến mãi</h3>
      <Slider {...settings}>
        {slides.map((slide) => (
          <NewBook key={slide} />
        ))}
      </Slider>
    </div>
  );
};

export default NewComingList;
