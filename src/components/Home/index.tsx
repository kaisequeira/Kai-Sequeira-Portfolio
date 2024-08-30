import ScrollDownButton from './ArrowDown'
import ContactItems from './ContactItems'
import Title from './Title'
import React from 'react'
import '@/app/globals.css'

const Home: React.FC = () => {
    return (
        <div className="bg-bgr w-screen h-screen flex flex-col items-center justify-center md:px-10 px-0 relative">
            <div className="flex-grow flex flex-col justify-center md:items-center items-start md:gap-11 gap-8 pt-6 lg:w-[1000px] xs:w-[360px] w-[330px]">
                <Title />
                <ContactItems />
            </div>
            <ScrollDownButton />
        </div>
    )
}

export default Home
