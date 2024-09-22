'use client'; 

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function Testimonials() {
  const images = [
    'https://images.unsplash.com/photo-1726352535850-dc9b4ff460ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  
    'https://images.unsplash.com/photo-1726309356095-e4c9be366c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D', 
  ];

  const head = [
    "Our Vision",
    "Our Mission"
  ];
  
  const texts = [
    "To be a leading children's hospital recognized for excellence in pediatric healthcare, innovation, and compassionate family-centered care.",
    "At our Hospital, our mission is to deliver exceptional healthcare services for children through advanced medical practices, a dedicated team of specialists, and a commitment to creating a safe and welcoming environment for our young patients and their families."
  ];

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }} 
        className="mySwiper w-full h-96 text-black"
        slidesPerView={1}
        spaceBetween={0} 
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex flex-col justify-center items-center relative'>
            <div className="mb-4 flex justify-center items-center">
              <img src={image} alt={`Slide ${index + 1}`} className='w-32 h-32 object-cover rounded-full shadow-lg' />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center p-4 bg-opacity-70 mt-8"> 
              <h1 className='text-3xl font-bold'>{head[index]}</h1>
              <p className="text-lg font-semibold mt-2 max-w-xl">{texts[index]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
