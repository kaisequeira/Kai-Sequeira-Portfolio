import React from 'react';
import ContactCircle from './IconCircle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col space-y-10 items-center justify-center">
      <p className="lg:text-10xl md:text-8xl sm:text-7xl text-5xl font-bold text-black text-center">Kai Sequeira</p>
      <p className="text-3xl font-light text-black">Full stack developer studying @ UNSW</p>
      <div className='flex space-x-4'>
        <ContactCircle icon={<FontAwesomeIcon icon={faGithub} />} color='#4285F4' size="70%"/>
        <ContactCircle icon={<FontAwesomeIcon icon={faLinkedin} />} color='#34A853' size="55%"/>
        <ContactCircle icon={<FontAwesomeIcon icon={faFileArrowDown} />} color='#FBBC05' size="45%"/>
        <ContactCircle icon={<FontAwesomeIcon icon={faMailBulk} />} color='#EA4335' size="60%"/>
      </div>
    </div>
  );
};

export default Home;