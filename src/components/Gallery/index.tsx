'use client'
import { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import {
    useTransform,
    useScroll,
    motion,
    MotionStyle,
    MotionValue,
} from 'framer-motion'
import '@/app/globals.css'
import Lenis from 'lenis'
import Gal1 from '/public/Gallery/1.jpg'
import Gal2 from '/public/Gallery/2.jpg'
import Gal3 from '/public/Gallery/3.jpg'
import Gal4 from '/public/Gallery/4.jpg'
import Gal5 from '/public/Gallery/5.jpg'
import Gal6 from '/public/Gallery/6.jpg'
import Gal7 from '/public/Gallery/7.jpg'
import Gal8 from '/public/Gallery/8.jpg'
import Gal9 from '/public/Gallery/9.jpg'
import Gal10 from '/public/Gallery/10.jpg'
import Gal11 from '/public/Gallery/11.jpg'
import Gal12 from '/public/Gallery/12.jpg'

const Gallery: React.FC = () => {
    const gallery = useRef(null)
    const [dimension, setDimension] = useState({ width: 0, height: 0 })

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    })

    const { height } = dimension
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time: DOMHighResTimeStamp) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', resize)
        requestAnimationFrame(raf)
        resize()

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <div
            ref={gallery}
            className="h-[175vh] bg-bgr relative flex gap-2 p-2 overflow-hidden z-40"
        >
            <Column
                images={[Gal1, Gal2, Gal3]}
                y={y}
                heightOffset="top-[-45%]"
            />
            <Column
                images={[Gal4, Gal5, Gal6]}
                y={y2}
                heightOffset="top-[-95%]"
            />
            <Column
                images={[Gal7, Gal8, Gal9]}
                y={y3}
                heightOffset="top-[-45%]"
            />
            <Column
                images={[Gal10, Gal11, Gal12]}
                y={y4}
                heightOffset="top-[-75%]"
            />
        </div>
    )
}

type ColumnProps = {
    images: StaticImageData[]
    heightOffset: string
    y: MotionValue
}

const Column: React.FC<ColumnProps> = ({ images, heightOffset, y }) => {
    return (
        <motion.div
            className={`relative h-full w-1/4 min-w-96 flex flex-col gap-2 ${heightOffset}`}
            style={{ y }}
        >
            {images.map((src, i) => (
                <div
                    key={i}
                    className="h-full w-full relative rounded-sm overflow-hidden"
                >
                    <Image
                        src={src}
                        alt="image"
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        fill
                    />
                </div>
            ))}
        </motion.div>
    )
}

export default Gallery
