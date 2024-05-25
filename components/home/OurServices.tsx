import Image from "next/image";
import ourServicesImage from "@/assets/otherPictures/ourServicesHome.webp";
import Link from "next/link";

export default function OurServices() {
  return (
    <div className="container flex justify-center">
      <div className="border-base-100 w-1/2 border-[1px] border-r-0">
        <Image src={ourServicesImage} alt="" />
      </div>
      <div className="border-base-100 flex w-1/2 flex-col items-center justify-center border-[1px]">
        <div className="flex w-2/3 flex-col gap-10 leading-7">
          <h3 className="title">
            Our Services
          </h3>
          <p>
            At MTC Millwork, we offer a wide range of services to meet all your
            kitchen design needs. Our services include custom kitchen design,
            kitchen remodeling, cabinetry, countertops, and much more. We use
            state-of-the-art technology to ensure that our designs are not only
            visually stunning, but also functional and practical. We take pride
            in our work and guarantee your satisfaction.
          </p>
          <Link className="btn h-16 w-60" href="/services">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
