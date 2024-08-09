import React from 'react';
import ContactCircle from './IconCircle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faMailBulk, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/app/globals.css';
import StickyButton from '../StickyItems/StickyButton';

const Home: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col md:space-y-7 sm:space-y-4 space-y-2 items-center justify-center">
      <div className='absolute top-0 left-0 w-screen'>
        <StickyButton
          icon={<FontAwesomeIcon className='size-9 text-white' icon={faPlay} />}
        />
      </div>
      <h1 className="text-center">
        Kai Sequeira
      </h1>
      <h4 className="text-center">
        Full stack developer studying @ UNSW
      </h4>
      <div className='flex space-x-4'>
        <ContactCircle
          icon={<FontAwesomeIcon className='size-2/3' icon={faGithub} />}
          color='#4285F4'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faLinkedin} />}
          color='#34A853'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-5/12' icon={faFileArrowDown} />}
          color='#FBBC05'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faMailBulk} />}
          color='#EA4335'
        />
      </div>
    </div>
  );
};

export default Home;