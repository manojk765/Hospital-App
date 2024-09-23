import React from 'react';
import Image from 'next/image';
import Facebook from './Images/facebook.png';
import Insta from './Images/instagram.png';
import Pinterest from './Images/pinterest.png';
import GitHub from './Images/github.png';
import Dribble from './Images/dribbble.png';
import LinkedIn from './Images/linkedin.png';

const Footer = () => {
  return (
    <div className='bg-[#1c1b22] py-4 text-white'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col lg:flex-row mt-4 mx-4 justify-center lg:justify-between'>
          <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center'>
            <h3 className='text-3xl font-semibold hover:text-[#00fdaa]'>
              Lorem Ipsum Hospitals
            </h3>
            <div className='text-left max-w-[30rem] ml-6 text-md mt-2 lg:mt-0'>
              We are dedicated to providing exceptional healthcare with compassion and integrity. 
              Our skilled team of professionals is committed to supporting your health and well-being through personalized care 
              and innovative treatments. We believe in fostering a supportive environment where every patient feels valued and heard. 
              Together, we strive to make a positive impact in our community, ensuring access to quality healthcare for all.
            </div>
          </div>
          <div className='flex flex-wrap lg:mt-0 md:ml-4 space-x-4 mt-4 lg:mt-0'>
            <a href='https://facebook.com' className='hover:bg-[#1877F2] h-12 rounded-full p-2'>
              <Image src={Facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a href='https://instagram.com' className='hover:bg-[#df1bdc] h-12 p-2 rounded-full'>
              <Image src={Insta} alt="Instagram" width={24} height={24} />
            </a>
            <a href='https://pinterest.com' className='hover:bg-[#cb1f27] h-12 p-2 rounded-full'>
              <Image src={Pinterest} alt="Pinterest" width={24} height={24} />
            </a>
            <a href='https://github.com' className='hover:bg-[#1e1e1e] h-12 p-2 rounded-full'>
              <Image src={GitHub} alt="GitHub" width={24} height={24} />
            </a>
            <a href='https://linkedin.com' className='hover:bg-[#0277b5] h-12 p-2 rounded-full'>
              <Image src={LinkedIn} alt="LinkedIn" width={24} height={24} />
            </a>
            <a href='https://dribbble.com' className='hover:bg-[#ff71b7] h-12 p-2 rounded-full'>
              <Image src={Dribble} alt="Dribbble" width={24} height={24} />
            </a>
          </div>
        </div>

        <footer className='p-4 border-gray-400 m-4 flex sm:flex-row flex-col-reverse justify-between items-center gap-12'>
          <div className='text-sm mb-2 sm:mb-0'>
            Copyright @ 2024
          </div>

          <div className='flex gap-4 sm:flex-row flex-col-reverse'>
            <a href='/' className='hover:text-[#00fdaa]'>Home</a>
            <a href='/about' className='hover:text-[#00fdaa]'>About</a>
            <a href='/services' className='hover:text-[#00fdaa]'>Services</a>
            <a href='/contact' className='hover:text-[#00fdaa]'>Contact</a>
          </div>
        </footer>
      </div>
    </div>
  ); 
};

export default Footer;
