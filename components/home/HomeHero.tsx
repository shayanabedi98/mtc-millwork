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
  const [opacity, setOpacity] = useState(1);
  const [slideShowIndex, setSlideShowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setSlideShowIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
        // Fade in the new image
        setOpacity(1);
      }, 500); // Adjust this value to match your fade transition duration
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-28 bordered border-l-0 border-r-0">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slideShowIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="mx-auto h-[810px] w-full object-cover"
            priority
            width={1980}
            height={1080}
            src={slideShowImages[slideShowIndex]}
            alt="Home kitchen with a beautiful countertop and modern cabinets"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.15)]">
        <h1>Welcome to MTC Millwork</h1>
        <h2>Where we create timeless elegance</h2>
        <Link href="/contact" className="btn mt-20 bordered">
          Contact
        </Link>
      </div>
    </div>
  );
}
