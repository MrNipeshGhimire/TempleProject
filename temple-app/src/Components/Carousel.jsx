import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://img.reintech.io/variants/11o9c37dv7lwetowklh227m4yy35/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b",
      text: "Welcome to Slide 1"
    },
    {
      image: "https://t3.ftcdn.net/jpg/06/41/10/00/360_F_641100009_UBDlMjZ9BmupJy2WPmNYqbxqJ4BCNm6T.jpg",
      text: "Explore the beauty of Slide 2"
    },
    {
      image: "https://t3.ftcdn.net/jpg/06/41/10/00/360_F_641100009_UBDlMjZ9BmupJy2WPmNYqbxqJ4BCNm6T.jpg",
      text: "Amazing visuals in Slide 3"
    },
    {
      image: "https://t3.ftcdn.net/jpg/06/41/10/00/360_F_641100009_UBDlMjZ9BmupJy2WPmNYqbxqJ4BCNm6T.jpg",
      text: "Incredible design in Slide 4"
    },
    {
      image: "https://t3.ftcdn.net/jpg/06/41/10/00/360_F_641100009_UBDlMjZ9BmupJy2WPmNYqbxqJ4BCNm6T.jpg",
      text: "Slide 5, the final journey"
    }
  ];

  useEffect(() => {
    // Auto-slide every 4 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div id="default-carousel" className="relative w-full h-screen bg-gray-900" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <img
                src={slide.image}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={`Slide ${index + 1}`}
              />
              {/* Text section in the center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-6 py-4 bg-black bg-opacity-50 rounded-md max-w-lg">
                <h2 className="text-4xl font-bold md:text-5xl">{slide.text}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-300'}`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
