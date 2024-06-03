import ContactUsEmailForm from "./ContactUsEmailForm";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

export default function ContactUs() {
  return (
    <div className="container-padding container my-0 flex flex-col items-center justify-center">
      <h3 className="title">Contact Us</h3>
      <div className="container-padding flex flex-col lg:flex-row justify-center gap-12">
        <div className="flex flex-col gap-12 p-4">
          <div className="flex items-center gap-10">
            <IoLocationOutline className="contact-icon" />
            <a href="https://maps.app.goo.gl/ZnYTTP6yMtPtmHaC7" className="w-2/3" target="_blank">
              8111 Jane st, unit 5, Concord Ontario L4K 7L4 CA
            </a>
          </div>
          <div className="flex items-center gap-10">
            <HiOutlinePhone className="contact-icon" />
            <a href="tel:+14165000045">+1 (416) 500-0045</a>
          </div>
          <div className="flex items-center gap-10">
            <MdOutlineEmail className="contact-icon" />
            <a href="mailto:info@MTCMillwork.ca">info@MTCMillwork.ca</a>
          </div>
          <div className="flex items-center gap-10">
            <IoShareSocialOutline className="contact-icon" />
            <a href="https://www.instagram.com/mtcmillwork">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="https://www.facebook.com/mtcmillwork" target="_blank">
              <CiFacebook className="text-3xl" />
            </a>
          </div>
        </div>
        <ContactUsEmailForm />
      </div>
    </div>
  );
}
