import React from 'react'
import '@/app/globals.css'
import Image from 'next/image'
import Label from '../_Global/Label'

const RedbackDisplay: React.FC = () => {
    return (
        <div className="bg-bgr w-screen h-fit flex flex-col justify-center items-center gap-4 p-6">
            <div className="relative 2xl:w-[1120px] lg:w-[800px] w-full h-fit flex justify-center items-center">
                <Image
                    src={'/About/Redback2024TeamPhoto.jpeg'}
                    alt="Redback Racing 2024 Team Photo"
                    quality={100}
                    width={440}
                    height={400}
                    unoptimized
                    priority
                />
            </div>
            <Label title="Redback Racing 2024" note="Team Photo" />
        </div>
    )
}

export default RedbackDisplay
