import React, { useState, useEffect } from "react";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0); // Tracks progress for the active line
  const slides = [
    "images/image1.jpg",
    // "images/image2.jpg",
    // "images/image3.jpg",
    "images/image4.jpg",
    // "images/location.jpg",
    "images/image5.png",
    "images/image6.jpg",
    // "images/image7.jpg",
  ];
  const intervalTime = 8000; //for auto-slide

  useEffect(() => {
    // Progress bar logic: Update progress based on slide time
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 100 / (intervalTime / 100); // Increment progress
        } else {
          return 100; // Ensure progress doesn't exceed 100%
        }
      });
    }, 100);

    // Auto-slide logic
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0); // Reset progress on slide change
    }, intervalTime);

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [slides.length, intervalTime]);

  return (
    <div id="carousel" className="relative w-full ">
      {/* Navigation Lines Above Carousel */}
      <div className="absolute z-20 flex -translate-x-1/2 bottom-5 md:top-5 left-1/2 space-x-1">
        {slides.map((_, index) => (
          <div key={index} className="relative w-14 h-1 rounded-md overflow-hidden bg-gray-500">
            {currentSlide === index && (
              <div
                className="absolute top-0 left-0 h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: "width 100ms linear",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Slides */}
      <div className="relative   overflow-hidden h-[40vh] sm:h-[50vh] md:h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={slide} className="absolute block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
