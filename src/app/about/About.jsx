'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() { 
  return (
    <div className='p-6'>
      <motion.div
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}  
        className='flex flex-col items-center gap-6 text-center'
      >
        <h5 className='text-4xl md:text-5xl text-[#002c77] font-title'>About Us</h5>
        <p className='text-2xl uppercase font-light text-gray-700 '>
          Welcome to Our Hospital - A Multispecialty Hospital for Children
        </p>
        <p className='w-full md:w-3/5 text-lg md:text-2xl text-gray-800 font-description'>
          At Our Hospital, we believe that every child deserves the highest quality of care in a nurturing environment. As a newly established multispecialty hospital for children, our mission is to provide comprehensive medical services tailored specifically for young patients, ensuring their health and wellbeing at every stage of childhood.
        </p>
      </motion.div>

      <div className='flex flex-wrap justify-center gap-6 p-6'>
        <motion.div
          className='w-full sm:w-1/3 md:w-1/4 shadow-lg hover:shadow-2xl relative h-48 overflow-hidden'
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}  
          transition={{ duration: 1 }}  
          whileHover={{ scale: 1.05 }}  
        >
          <Image
            src="https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
            alt="Hospital Corridor"
            layout='fill'
            objectFit='cover'
          />
        </motion.div>

        <motion.div
          className='w-full sm:w-1/3 md:w-1/4 shadow-lg hover:shadow-2xl relative h-48 overflow-hidden'
          initial={{ y: 100, opacity: 0 }}  
          animate={{ y: 0, opacity: 1 }}  
          transition={{ duration: 1 }}  
          whileHover={{ scale: 1.05 }}  
        >
          <Image
            src="https://media.istockphoto.com/id/1326890978/photo/shot-of-an-empty-hallway-in-a-lab.jpg?s=2048x2048&w=is&k=20&c=HpyPFk2bs5pxOTvEIeBQ73eSAXN9QlrIHGNY6y5kql4="
            alt="Lab Hallway"
            layout='fill'
            objectFit='cover'
          />
        </motion.div>

        <motion.div
          className='w-full sm:w-1/3 md:w-1/4 shadow-lg hover:shadow-2xl relative h-48 overflow-hidden'
          initial={{ x: 100, opacity: 0 }}  
          animate={{ x: 0, opacity: 1 }}  
          transition={{ duration: 1 }}  
          whileHover={{ scale: 1.05 }}  
        >
          <Image
            src="https://media.istockphoto.com/id/1454794642/photo/empty-corridor-hospital.webp?s=2048x2048&w=is&k=20&c=G5Sp6FTRKA-VIFqLTQmcIZwyMmlyh1OabpGC8Kx87IM="
            alt="Hospital Corridor"
            layout='fill'
            objectFit='cover'
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
 