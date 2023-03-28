import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300x200?text=Slide+1",
      title: "Slide 1 Title",
      description: "Slide 1 Description",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300x200?text=Slide+2",
      title: "Slide 2 Title",
      description: "Slide 2 Description",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300x200?text=Slide+3",
      title: "Slide 3 Title",
      description: "Slide 3 Description",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300x200?text=Slide+4",
      title: "Slide 4 Title",
      description: "Slide 4 Description",
    },
  ];

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-300"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white py-3 px-4">
                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 py-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`w-4 h-4 rounded-full ${
              index === activeIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
