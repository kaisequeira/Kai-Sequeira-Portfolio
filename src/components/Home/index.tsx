import React from 'react';
import ContactCircle from './ContactCircle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faMailBulk, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StickyButton from '../Global/StickyButton';
import MotionShape from '../Global/MotionShape';
import '@/app/globals.css';

const Home: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col md:space-y-7 sm:space-y-4 space-y-2 items-center justify-center">
      <div className='absolute top-0 left-0 w-screen'>
        <StickyButton icon={<FontAwesomeIcon className='md:size-10 size-6 pl-0.5 absolute justify-center items-center' icon={faPlay} />}/>
      </div>
      <MotionShape className="absolute bottom-1/4 left-1/6 rotate-12 size-40 bg-shapes"/>
      <MotionShape className="absolute rounded-full rotate-45 size-28 bg-shapes bottom-1/10 left-1/4" reverse={true}/>
      <MotionShape className="absolute top-1/4 right-1/6 rotate-45 size-64 bg-shapes" reverse={true}/>
      <MotionShape className="absolute inline-block w-0 h-0 border-solid border-t-0 border-r-[73.5px] border-l-[73.5px] border-b-[127.3px] border-l-transparent border-r-transparent border-t-transparent border-b-shapes top-1/10 right-1/4"/>
      <h1 className="text-center z-10">
        Kai Sequeira
      </h1>
      <h4 className="text-center z-10">
        Full stack developer studying @ UNSW
      </h4>
      <div className='flex space-x-4 z-10'>
        <ContactCircle
          icon={<FontAwesomeIcon className='size-2/3' icon={faGithub} />}
          color='rgb(var(--color-acc1))'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faLinkedin} />}
          color='rgb(var(--color-acc2))'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-5/12' icon={faFileArrowDown} />}
          color='rgb(var(--color-acc3))'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faMailBulk} />}
          color='rgb(var(--color-acc4))'
        />
      </div>
    </div>
  );
};

export default Home;