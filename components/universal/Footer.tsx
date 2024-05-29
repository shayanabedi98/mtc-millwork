"use client";
import { useState } from "react";
import FooterLink from "./FooterLink";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <footer>
      <div className="container border-t border-base-100 my-0 flex flex-col items-center justify-center gap-5 py-10 text-base-100">
        <Image alt="MTC Millwork Logo" src="/assets/otherPictures/favicon-transparent.png" width={100} height={100} className="w-10" />
        <div className="flex justify-center gap-4">
          <FooterLink location="/" content="HOME" />
          <FooterLink location="/contact" content="CONTACT" />
          <FooterLink location="/services" content="SERVICES" />
          <FooterLink location="/projects" content="PROJECTS" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            className="flex items-center justify-center text-xl font-normal"
            href="https://www.instagram.com/mtcmillwork"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="flex items-center justify-center text-lg font-normal"
            href="https://www.facebook.com/mtcmillwork"
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a
            className="flex items-center justify-center text-lg font-normal"
            href="tel:+14165000045"
          >
            <HiOutlinePhone />
          </a>
        </div>
        <div className="flex items-baseline text-xs">
          <p>
            &copy; {year} MTC Millwork Inc. All rights reserved. Designed &
            Developed by{" "}
            <a
              className="underline underline-offset-2"
              href="https://pantheras.ca"
              target="_blank"
            >
              Pantheras Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
