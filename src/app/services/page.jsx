'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const whyChooseUs = [
  {
    title: "Expert Pediatric Care",
    description: "Our team of highly trained pediatricians and specialists ensures that your child receives the best possible care with the latest in medical advancements.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "Family-Centered Approach",
    description: "We believe in partnering with families, ensuring parents and guardians are involved in every step of their child’s treatment journey.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Our hospital is equipped with advanced technology and child-friendly environments designed to provide comfort and exceptional care.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "Comprehensive Services",
    description: "From routine check-ups to specialized surgeries, we offer a full range of pediatric services under one roof to meet every child’s health needs.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "Child-Friendly Environment",
    description: "Our hospital is designed with young patients in mind, featuring colorful play areas and a warm atmosphere that helps reduce stress and anxiety.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "24/7 Emergency Care",
    description: "We provide around-the-clock emergency services to ensure that your child gets the urgent care they need at any time.",
    src: "https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
  },
  {
    title: "Supportive Care for Families",
    description: "We offer counseling, accommodation, and emotional support services to ensure families are well-cared for throughout their child’s treatment.",
    src: "https://cdn.wallpapersafari.com/40/83/rxpl2A.jpg"
  }
];

const Services = () => {
  return (
    <div className='bg-gradient-to-r from-blue-100 to-green-100 p-16'>
      <h1 className='text-black text-6xl max-w-[320px] mx-auto font-semibold p-4'>
        Our <span className='text-[#1f4756] inline'>Services</span>
      </h1>

      <div className='max-w-[1200px] mx-auto space-y-24 '>
        {whyChooseUs.map((project, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={`flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"} p-6 rounded-lg shadow-lg bg-white transform hover:-translate-y-1 transition-transform duration-300 `}  
        >
        
            <div className='space-y-2 max-w-[550px]'>
              <h2 className='text-7xl my-4 text-[#333]'>{`0${index + 1}`}</h2>
              <h2 className='text-4xl font-bold text-[#1f4756]'>{project.title}</h2>
              <p className='text-lg text-[#555] break-words p-4'>{project.description}</p>
            </div>

            <div className='flex items-center'>
              <Image
                src={project.src}
                alt={`Image illustrating ${project.title}`}
                className='h-[300px] w-auto object-cover rounded-lg shadow'
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
