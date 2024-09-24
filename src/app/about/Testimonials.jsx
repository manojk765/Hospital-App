'use client'; 

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/autoplay';
import Mission from './mission.png'
import Vision from './vision.png'
import Values from './values.png'


import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image'; 

export default function Testimonials() { 
  const images = [ 
    Vision,Mission,Values
  ]; 

  const head = [
    "Our Vision", 
    "Our Mission",
    "Our Values"
  ];
  
  const texts = [
    "To be a leading children's hospital recognized for excellence in pediatric healthcare, innovation, and compassionate family-centered care.",
    "Our mission is to provide exceptional healthcare for children through advanced medical practices, a dedicated team of specialists, and a safe, welcoming environment for young patients and their families.",
    "Every child and family at our hospital receives compassionate, honest care rooted in quality and integrity. We promote cooperation, respect, and advocacy to enhance the health and well-being of our young patients."  
  ]
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }} 
        className="mySwiper w-full min-h-96 h-[75vh] sm:h-[80vh] md:h-[90vh] lg:h-[75vh] xl:h-[75vh] 2xl:h-[60vh] text-black mt-20"
        slidesPerView={1}
        spaceBetween={0} 
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='flex flex-col justify-center items-center relative'>
             <div className="mb-4 flex justify-center items-center">
              <div className='w-32 h-32 relative'>
                  <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-full shadow-lg'
                /> 
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center p-4 bg-opacity-70"> 
              <h1 className='text-3xl text-[#333333] md:text-4xl font-title'>{head[index]}</h1>
              <p className="text-lg text-black mt-2 max-w-xl md:text-xl font-description">{texts[index]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
