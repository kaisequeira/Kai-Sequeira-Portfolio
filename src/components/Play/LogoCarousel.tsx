"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useLenis } from '@/components/_Global/LenisWrapper';
import useMeasure from 'react-use-measure';

const prefixLocation = '/SVGLogos/';
const FAST_DURATION = 25;
const SLOW_DURATION = 50;

const logos = [
    'Javascript.svg',
    'Typescript.svg',
    'Nextjs.svg',
    'MUI.svg',
    'React.svg',
    'Tailwind.svg',
    'CSS.svg',
    'HTML.svg',
    'C.svg',
    'CSharp.svg',
    'Java.svg',
    'Python.svg',
    'R.svg',
    'Dynamodb.svg',
    'Postgresql.svg',
    'SQL.svg',
    'S3.svg',
];

export default function LogoCarousel() {
  const { lenis } = useLenis();
  const [scrollDirectionLeft, setScrollDirectionLeft] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(FAST_DURATION);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 3 + 3;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        repeat: Infinity,
        duration: duration,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex w-fit"
        onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
        }}
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-none mr-4 md:size-28 size-24 p-2 flex items-center justify-center dark:bg-transparent bg-bgr rounded-2xl">
            <Image
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              src={`${prefixLocation}${logo}`}
              alt={`Logo ${index + 1}`}
              width={65}
              height={65}
              className={`object-contain`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}