import React from "react";
import Slider from "react-slick";

const Hero = () => {
  // Image array
  const images = [
    {
      url: "/images/Resort1.jpg",
      alt: "Resort 1",
      caption: "Relax at Our Luxurious Resort",
    },
    {
      url: "/images/Resort2.jpg",
      alt: "Resort 2",
      caption: "Breathtaking Views Await You",
    },
    {
      url: "/images/Resort3.jpg",
      alt: "Resort 3",
      caption: "Experience Tranquility and Nature",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              alt={image.alt}
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {image.caption}
                </h2>
                <button className="bg-primaryGreen text-white px-6 py-3 rounded-md hover:bg-darkGreen border border-primaryGreen mt-4">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
