import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import hiring from '../assets/hiring.jpg';
import { FaGoogle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='flex flex-col bg-violet-950 '>
      <div className='flex flex-col justify-between md:py-36 py-24 md:flex-row '>
        <div className='mx-5 md:max-w-3xl md:mx-auto md:mt-0'>
          <p className='text-white px-10 py-5 md:px-10 text-4xl md:text-7xl font-semibold'>Empower Careers:</p>
          <p className='text-white px-10 md:px-10 text-lg md:text-2xl'>
            Where Job Seekers Connect with Dream Opportunities</p>
            <div className='py-10 '>
            <Link to='#' className='text-violet-400 flex items-center hover:scale-105 duration-300 text-xl md:text-3xl py-5 md:py-5 md:px-10 px-10  cursor-pointer '>
              For Job Seekers
              <span><HiArrowNarrowRight size={20} className='ml-1'/></span>  
            </Link>

            <Link to='#' className='text-violet-400 flex items-center hover:scale-105 duration-300 text-xl md:text-3xl md:px-10 px-10  cursor-pointer '>
              For Hiring
              <span><HiArrowNarrowRight size={20} className='ml-1'/></span>  
            </Link>
            </div>

            <div className='p-5 md:p-10 flex flex-col items-center md:flex-row md:items-center'>
              <Link to='#'  className='group  w-fit px-4 md:px-6 py-3 md:my-2 flex items-center hover:scale-105 duration-300 rounded-md bg-white cursor-pointer'>
                <FaGoogle size={20} className='mr-2' />Continue with Google
              </Link>

              <Link to='#' className='text-violet-400  hover:scale-105 duration-300 text-lg md:text-xl font-semibold px-4 md:px-10 py-3 md:py-0  cursor-pointer '>
              Or SignUp 
            </Link>
          </div>
        </div>
        <img
          src={hiring}
          alt="hiring"
          className='w-full md:max-w-md mx-auto md:m-0'
          style={{ maxWidth: '40%', borderRadius: '5%' }}
        />
      </div>
    </div>
  );
};

export default Home; 