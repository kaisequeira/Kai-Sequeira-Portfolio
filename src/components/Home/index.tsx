import ScrollDownButton from './ArrowDown'
import ContactItems from './ContactItems'
import Title from './Title'
import React from 'react'
import '@/app/globals.css'

const Home: React.FC = () => {
    return (
        <div className="bg-bgr w-screen h-screen flex flex-col items-center justify-center pl-10 pr-10 relative">
            <div className="flex-grow flex flex-col justify-center items-center md:gap-11 gap-8 pt-10 lg:w-[1000px] w-full">
                <Title />
                <ContactItems />
            </div>
            <ScrollDownButton />
        </div>
    )
}

export default Home
