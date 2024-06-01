"use client";

import NavbarItemDesktop from "./NavbarItemDesktop";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItemMobile from "./NavbarItemMobile";
import Image from "next/image";
import logoName from "@/public/assets/otherPictures/logo-name-transparent.png";
import logoIcon from "@/public/assets/otherPictures/favicon-transparent.png";

export default function Navbar() {
  const [isActiveMovileNav, setIsActiveMobileNav] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-20 flex h-28 w-full items-center justify-between bg-primary bg-opacity-70 px-4 shadow-lg lg:px-10">
      <div className="z-20 flex w-full items-center justify-start text-lg font-medium">
        {/* <Image src="" alt="" width={100} height={100} /> */}
        <Link
          className="flex items-center justify-center gap-4 border-b-2 border-transparent px-2 py-2 font-normal transition duration-100 ease-in-out hover:border-current"
          href="/"
        >
          <Image
            src={logoIcon}
            alt="MTC Millwork logo symbol"
            className="w-14"
          />
          <Image src={logoName} alt="MTC Millwork logo name" className="w-40" />
        </Link>
      </div>
      <nav className="w-full">
        <div className="flex items-center gap-12 justify-end text-sm max-lg:hidden">
          <div className="flex gap-5">
            <NavbarItemDesktop content="HOME" location="/" />
            <NavbarItemDesktop content="CONTACT" location="/contact" />
            <NavbarItemDesktop content="SERVICES" location="/services" />
            <NavbarItemDesktop content="PROJECTS" location="/projects" />
          </div>
          <div className="flex items-center justify-end gap-2 pl-12 border-l-[1px] border-accent text-xl transition duration-100 shadow-2xl">
            <a
              className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 font-normal transition duration-100 ease-in-out hover:border-current"
              href="tel:+14165000045"
            >
              <BsTelephoneFill />
            </a>
            <Link
              className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 font-normal transition duration-100 ease-in-out hover:border-current"
              href="https://www.instagram.com/mtcmillwork"
              target="_blank"
            >
              <RiInstagramFill />
            </Link>
            <Link
              className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 font-normal transition duration-100 ease-in-out hover:border-current"
              href="https://www.facebook.com/mtcmillwork"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>

        <div
          className="flex flex-col items-end gap-1 lg:hidden"
          onClick={() => setIsActiveMobileNav(!isActiveMovileNav)}
        >
          <motion.div
            className="z-20 h-[1px] w-[20px] bg-secondary"
            initial={{ position: "relative" }}
            animate={{
              top: isActiveMovileNav ? "2.5px" : 0,
              rotate: isActiveMovileNav ? 45 : 0,
            }}
          ></motion.div>
          <AnimatePresence mode="popLayout">
            {!isActiveMovileNav && (
              <motion.div
                className="z-20 h-[1px] w-[20px] bg-secondary"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, position: "relative" }}
              ></motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="z-20 h-[1px] w-[20px] bg-secondary"
            initial={{ position: "relative" }}
            animate={{
              bottom: isActiveMovileNav ? "2.5px" : 0,
              rotate: isActiveMovileNav ? -45 : 0,
            }}
          ></motion.div>
        </div>
        <AnimatePresence>
          {isActiveMovileNav && (
            <motion.div
              className="fixed z-10 flex h-full w-full flex-col items-center justify-center gap-10 bg-neutral"
              initial={{ right: "-100%", top: 0 }}
              animate={{ right: 0 }}
              exit={{ right: "-100%" }}
            >
              <NavbarItemMobile location="/" content="HOME" />
              <NavbarItemMobile location="/contact" content="CONTACT" />
              <NavbarItemMobile location="/services" content="SERVICES" />
              <NavbarItemMobile location="/projects" content="PROJECTS" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
