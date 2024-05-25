"use client";

import NavbarItemDesktop from "./NavbarItemDesktop";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItemMobile from "./NavbarItemMobile";

export default function Navbar() {
  const [isActiveMovileNav, setIsActiveMobileNav] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-between px-4 h-28 lg:px-10 bg-[rgba(0,0,0,0.5)]">
      <div className="z-20 flex items-center justify-center text-lg font-medium">
        {/* <Image src="" alt="" width={100} height={100} /> */}
        <Link
          className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 font-normal transition duration-100 ease-in-out hover:border-current"
          href="/"
        >
          MTC MILLWORK INC.
        </Link>
      </div>
      <nav className="">
        <div className="flex items-center justify-center gap-5 text-sm max-lg:hidden">
          <NavbarItemDesktop content="HOME" location="/" />
          <NavbarItemDesktop content="CONTACT" location="/contact" />
          <NavbarItemDesktop content="SERVICES" location="/services" />
          <NavbarItemDesktop content="PROJECTS" location="/projects" />
          {/* <Link
            className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 text-2xl font-normal transition duration-100 ease-in-out hover:border-current"
            href="https://www.instagram.com/mtcmillwork"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className="flex items-center justify-center border-b-2 border-transparent px-2 py-2 text-xl font-normal transition duration-100 ease-in-out hover:border-current"
            href="https://www.facebook.com/mtcmillwork"
            target="_blank"
          >
            <FaFacebookF />
          </Link> */}
        </div>
        <div
          className="flex flex-col gap-1 lg:hidden"
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
