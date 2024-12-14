import React, { useState } from "react";
import Image from "./pas.png";
import Image1 from "./images/foox.jr.png";
import Image2 from "./images/foox.jr3.png";

const Carousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: Image,
      alt: "Image 1",
      description:
        "We're proud to say that most of our new business comes from referrals.  Our clients are our partners, and forming long-lasting relationships is always our goal.  See what some of our clients are saying about working with Team NPG",
      name: "PAUL JENNIES",
    },
    {
      src: Image1,
      alt: "Image 2",
      description:
        "NPG has been a great asset to our team, with bigger concepts like helping us build our brand and then also with everyday tasks such as creating social graphics and building our online presence. Would definitely recommend their team to companies who are looking to grow their business!",
      name: "MARY SMIT",
    },
    {
      src: Image2,
      alt: "Image 3",
      description:
        "I have built over a dozen websites with nearly a dozen different developers and web shops. The experience building my latest website with NPG was possibly the best I've ever had. From the proposal to the launch, they were honest, competent and thorough. I truly felt like I had a partner in building my website with NPG as opposed to just a vendor.!",
      name: "BEN POL",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="flex flex-col justify-center items-center w-full px-40 fixed top-64">
        <div className="overflow-hidden rounded-full size-32">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover rounded-full border-4 border-black"
          />
        </div>
        <p className="text-center mt-4 text-gray-700">
          {images[currentIndex].description}
        </p>
        <p className="text-center mt-6 font-semibold text-gray-700">
          {images[currentIndex].name}
        </p>
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="fixed left-20 top-1/2 transform -translate-y-1/2 px-4 bg-black text-white rounded-full size-10"
        >
          &#8249;
        </button>
        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="fixed right-20 top-1/2 transform -translate-y-1/2 px-4 bg-black text-white rounded-full size-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousels;
