
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';

const Swip = () => {
  const projects = [
    { image: project1, githubUrl: "https://github.com/ayushrtwt/CanvasConnect" },
    { image: project2, githubUrl: "https://github.com/ayushrtwt/carpool_system" },
    { image: project3, githubUrl: "https://github.com/ayushrtwt/blogchan" },
    { image: project4, githubUrl: "https://github.com/ayushrtwt/projectmap" },
    { image: project5, githubUrl: "https://github.com/ayushrtwt/PixelPenDigits" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swip;