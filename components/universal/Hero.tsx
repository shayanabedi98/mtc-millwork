"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  h1: string;
  //   h2: string;
  heroClass: string;
};

export default function Hero({ src, alt, h1, heroClass }: Props) {
  const path = usePathname();
  const [pathIndex, setPathIndex] = useState(0);

  useEffect(() => {
    if (path == "/contact") {
      setPathIndex(1);
    } else if (path == "/services") {
      setPathIndex(2);
    } else if (path == "/projects") {
      setPathIndex(3);
    } else {
      setPathIndex(0);
    }
  }, [path, pathIndex]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
        key={pathIndex}
        className="bordered relative mt-28 border-l-0 border-r-0"
      >
        <div>
          <Image
            priority
            className={`${heroClass} h-[800px] w-full object-cover`}
            src={src}
            alt={alt}
            width={2000}
            height={1000}
          />
        </div>
        <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.05)]">
          <h1 className="hero-header">{h1}</h1>
          {/* <h2>{h2}</h2> */}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
