'use client';

import React from 'react';
import sample from './sample.jpg'; 
import Image from 'next/image'; 
import { motion } from 'framer-motion';

function Homepage() {
  return (
    <>  
      <div className='flex flex-col h-screen px-4 sm:px-8 lg:px-20 xl:px-32 lg:flex-row lg:items-center bg-gradient-to-b from-blue-50 to-white'>
        {/* Image Section */}
        <div className='relative h-1/2 lg:h-{1000} sm:h-{400px} lg:w-1/2 w-full overflow-hidden'>
          <Image 
            src={sample} 
            alt="Sample Image" 
            layout="fill" 
            className='object-contain'
          />
        </div>   

        {/* Content Section */}
        <div className='h-1/2 w-full flex flex-col gap-6 items-start justify-center px-4 sm:px-8 lg:px-12 z-10 text-left lg:h-full lg:w-1/2 mt-4'>
        
          <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1,y:0 }}
          transition={{ duration: 1}}
          className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.div>
        
        
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1}} 
            className='text-lg sm:text-xl lg:text-xl'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </motion.div>
          <div>
            <button className='px-6 py-3 rounded-lg ring-2 ring-gray-800 bg-gray-800 text-white hover:text-[#00fdaa] hover:ring-[#00fdaa] transition-all duration-300 relative group'>
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00fdaa] transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </> 
  );
}

export default Homepage;
