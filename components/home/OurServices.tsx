import Image from "next/image";
import ourServicesImage from "@/public/assets/otherPictures/ourServicesHome.webp";
import Link from "next/link";

export default function OurServices() {
  return (
    <div className="container flex flex-col justify-center lg:flex-row">
      <div className="lg:border-r-0 bordered lg:w-1/2">
        <Image src={ourServicesImage} alt="" />
      </div>
      <div className="py-10 flex flex-col items-center justify-center bordered lg:w-1/2">
        <div className="flex w-full flex-col gap-10 leading-7 lg:w-2/3">
          <h3 className="title">Our Services</h3>
          <p>
            At MTC Millwork, we offer a wide range of services to meet all your
            kitchen design needs. Our services include custom kitchen design,
            kitchen remodeling, cabinetry, countertops, and much more. We use
            state-of-the-art technology to ensure that our designs are not only
            visually stunning, but also functional and practical. We take pride
            in our work and guarantee your satisfaction.
          </p>
          <Link className="btn " href="/services">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
