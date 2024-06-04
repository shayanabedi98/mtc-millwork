"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  const slideShowImages = [
    "/assets/otherPictures/hero1.webp",
    "/assets/otherPictures/hero2.webp",
    "/assets/otherPictures/hero3.webp",
  ];
  // const [opacity, setOpacity] = useState(1);
  // const [slideShowIndex, setSlideShowIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpacity(0);
  //     setTimeout(() => {
  //       setSlideShowIndex(
  //         (prevIndex) => (prevIndex + 1) % slideShowImages.length,
  //       );
  //       // Fade in the new image
  //       setOpacity(1);
  //     }, 500); // Adjust this value to match your fade transition duration
  //   }, 9000);
  //   return () => clearInterval(interval);
  // });

  return (
    <div className="bordered relative mt-16 border-l-0 border-r-0 bg-accent lg:mt-28">
      <AnimatePresence mode="popLayout">
        <motion.div
          // key={slideShowIndex}
          initial={{ opacity: 0 }}
          // animate={{ opacity: opacity }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }}
          className=""
        >
          <Image
            className="mx-auto h-[550px] w-full bg-accent object-cover md:h-[700px] lg:h-[810px]"
            priority
            width={1980}
            height={1080}
            src={slideShowImages[0]}
            alt="Home kitchen with a beautiful countertop and modern cabinets"
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.15)]"
      >
        <h1>Welcome to MTC Millwork</h1>
        <h2>Where we create timeless elegance</h2>
        <Link href="/contact" className="btn bordered mt-20">
          Contact
        </Link>
      </motion.div>
    </div>
  );
}
