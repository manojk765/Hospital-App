import React from 'react';
import { FaHospitalUser } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { FaHospital } from "react-icons/fa6";

const images = [
    <FaHospitalUser />,
    <FaHandHoldingHeart />,
    <GiLifeSupport />,
    <FaHospital />
];

const headings = [
    "Trusted Care",
    "Personal Attention",
    "Ongoing Support",
    "Innovative Solutions"
];

const explanation = [
    "Families rely on our consistent, compassionate care, knowing their children are in expert hands.",
    "Every child receives individualized care that’s tailored to their specific needs and medical journey.",
    "From diagnosis to recovery, we offer continuous guidance and resources for families at every step.",
    "We stay ahead by utilizing the latest advancements in pediatric medicine and technology."
];

function Info() {
  return (
    <div>
      <div className='flex items-center justify-center mb-14 flex-col h-auto lg:h-screen bg-[#fafafa] p-6'>
        <div className='flex items-center flex-col'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-[#202020] font-info'>Why Choose Us</h1>
          <div className="h-1 w-32 bg-[#3f51b5] mt-4"></div>
          <p className='m-5 max-w-[67%] text-2xl text-center font-light'>
            Choose us for trusted, personalized care where every child receives focused attention from expert pediatricians. 
            We are committed to innovation and holistic healing, ensuring the best medical outcomes. 
            With a compassionate approach, we support families every step of the way.
          </p>
        </div> 

        <div className='flex flex-row justify-center items-center bg-[#fafafa] flex-wrap mt-12'>
          {images.map((image, index) => (
            <div key={index} className='m-4 p-6 w-72 h-72 flex flex-col items-center bg-white shadow-lg rounded-lg transform transition duration-500 hover:shadow-xl hover:-translate-y-2  m-30px'>
              <div className='text-5xl text-[#3f51b5] mb-4'>{image}</div>
              <h2 className='text-xl font-semibold'>{headings[index]}</h2>
              <p className='text-center max-w-[80%] text-lg font-light'>{explanation[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
