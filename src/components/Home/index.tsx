import React from 'react';
import ContactCircle from './ContactCircle';
import MotionShape from '../Global/MotionShape';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlayButton from './PlayButton';
import '@/app/globals.css';

const Home: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col md:space-y-11 space-y-6 items-center justify-center">
        <PlayButton/>
      <MotionShape className="absolute bottom-1/4 left-1/6 rotate-12 size-40 bg-shapes"/>
      <MotionShape className="absolute rounded-full rotate-45 size-28 bg-shapes bottom-1/10 left-1/4" reverse={true}/>
      <MotionShape className="absolute top-1/4 right-1/6 rotate-45 size-64 bg-shapes" reverse={true}/>
      <MotionShape className="absolute inline-block w-0 h-0 border-solid border-t-0 border-r-[73.5px] border-l-[73.5px] border-b-[127.3px] border-l-transparent border-r-transparent border-t-transparent border-b-shapes top-1/10 right-1/4"/>
      <div className='md:space-y-7 space-y-4 z-10'>
        <h1 className="text-center z-10">
          Kai Sequeira
        </h1>
          <h4 className="z-10 text-center">
            Full stack software engineer studying @ UNSW | 3rd Year
          </h4>
          <div className='flex flex-row justify-center gap-4'>
            <h4 className=" text-right z-10 p-0">
              About <FontAwesomeIcon className='md:text-3xl text-xl pl-1' icon={faCircleUser} />
            </h4>
            <h4 className="text-right z-10 p-0">
              Sydney <FontAwesomeIcon className='md:text-3xl text-xl pl-1' icon={faLocationDot} />
            </h4>
          </div>
      </div>
      <div className='flex md:space-x-4 space-x-2 z-10'>
        <ContactCircle type="Github" />
        <ContactCircle type="Linkedin" />
        <ContactCircle type="Resume" />
        <ContactCircle type="Email" />
      </div>
    </div>
  );
};

export default Home;