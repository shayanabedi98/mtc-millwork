import Image from "next/image";
import NavbarItemDesktop from "./NavbarItemDesktop";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 flex w-full items-center justify-between px-10 py-2">
      <div className="flex items-center justify-center">
        {/* <Image src="" alt="" width={100} height={100} /> */}
        <p>MTC MILLWORK INC.</p>
      </div>
      <nav className="flex items-center justify-center gap-5">
        <NavbarItemDesktop content="HOME" location="/" />
        <NavbarItemDesktop content="CONTACT" location="/contact" />
        <NavbarItemDesktop content="SERVICES" location="/services" />
        <NavbarItemDesktop content="PROJECTS" location="/projects" />
        <Link href="https://www.instagram.com/mtcmillwork" target="_blank">
          <FaInstagram />
        </Link>
        <Link href="https://www.facebook.com/mtcmillwork" target="_blank">
          <FaFacebookF />
        </Link>
      </nav>
    </header>
  );
}
