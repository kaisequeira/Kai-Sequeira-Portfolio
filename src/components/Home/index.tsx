import React from 'react';
import ContactBox from './ContactBox';
import { faSchool, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/app/globals.css';
import Label from '../_Global/Label';
import ScrollDownButton from './ArrowDown';

const Home: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col md:gap-11 gap-8 items-center justify-center md:pb-10 pb-16 pl-10 pr-10 relative">
      <div className='flex flex-col md:gap-8 gap-6 lg:w-[1000px] w-full'>
        <h1 className="text-center text-wrap">
          Nice to meet you, I'm Kai
        </h1>
        <h4 className="text-center text-wrap p-0">
          Full stack software engineering student @ Redback Racing
        </h4>
        <div className='flex flex-row justify-center gap-4 flex-wrap'>
          <Label title="Institution" note="UNSW" children={<FontAwesomeIcon className='text-content font-semibold' icon={faSchool} />} />
          <Label title="Location" note="Sydney" children={<FontAwesomeIcon className='text-content font-semibold' icon={faLocationDot} />} />           
        </div>
      </div>
      <div className='md:flex grid grid-cols-6 relative md:gap-6 gap-4'>
        <div className="md:transform -rotate-6 translate-y-4 transform-none col-span-2">
          <ContactBox type="Github" />
        </div>
        <div className="md:transform -rotate-3 translate-y-1 transform-none col-span-2">
          <ContactBox type="LinkedIn" />
        </div>
        <div className="transform col-span-2">
          <ContactBox type="About" />
        </div>
        <div className='col-span-1 md:hidden visible'/>
        <div className="md:transform rotate-3 md:translate-y-1 transform-none col-span-2">
          <ContactBox type="Resume" />
        </div>
        <div className="md:transform rotate-6 md:translate-y-4 transform-none col-span-2">
          <ContactBox type="Email" />
        </div>
        <div className='col-span-1 md:hidden visible'/>
      </div>
      <ScrollDownButton/>
    </div>
  );
};

export default Home;