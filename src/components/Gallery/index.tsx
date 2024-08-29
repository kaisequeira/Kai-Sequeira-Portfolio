'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTransform, useScroll, motion, MotionStyle, MotionValue } from 'framer-motion';
import '@/app/globals.css';
import Lenis from 'lenis';

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

const Gallery: React.FC = () => {
  
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:0, height:0});

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })

    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis();
      
        const raf = (time: DOMHighResTimeStamp) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
        };
      
        const resize = () => {
          setDimension({ width: window.innerWidth, height: window.innerHeight });
        };
      
        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();
      
        return () => {
          window.removeEventListener("resize", resize);
        };
    }, []);
    
    return (
        <div ref={gallery} className="h-[175vh] bg-bgr relative flex gap-2 p-2 overflow-hidden z-40">
            <Column images={[images[0], images[1], images[2]]} y={y} heightOffset="top-[-45%]"/>
            <Column images={[images[3], images[4], images[5]]} y={y2} heightOffset="top-[-95%]"/>
            <Column images={[images[6], images[7], images[8]]} y={y3} heightOffset="top-[-45%]"/>
            <Column images={[images[9], images[10], images[11]]} y={y4} heightOffset="top-[-75%]"/>
        </div>
    );
};

type ColumnProps = {
    images: string[];
    heightOffset: string;
    y: MotionValue;
};
  
const Column: React.FC<ColumnProps> = ({ images, heightOffset, y }) => {
    return (
        <motion.div 
            className={`relative h-full w-1/4 min-w-96 flex flex-col gap-2 ${heightOffset}`}
            style={{ y }}
        >
            {images.map((src, i) => (
                <div key={i} className="h-full w-full relative rounded-sm overflow-hidden">
                    <Image 
                        src={`/Gallery/${src}`}
                        alt='image'
                        fill
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default Gallery;