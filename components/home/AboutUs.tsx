import Image from "next/image";
import aboutUsImage from "@/public/assets/otherPictures/aboutUsHome.webp";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="container flex flex-col-reverse justify-center lg:flex-row">
      <div className="bordered flex flex-col items-center justify-center max-xl:py-10 max-lg:px-4 lg:w-1/2">
        <div className="flex w-full flex-col gap-10 leading-7 max-lg:text-center lg:w-2/3">
          <h3 className="title">About Us</h3>
          <p>
            <span className="text-xl font-bold text-base-100">
              MTC Millwork
            </span>{" "}
            is a Canadian-based business since 2018, is your destination for
            top-tier millwork solutions in the Greater Toronto Area
            &#40;GTA&#41;. Equipped with cutting-edge machinery, our skilled
            team excels in detailed residential and commercial projects, from
            design to installation. With a passion for precision and a portfolio
            filled with exquisite kitchen, closet, vanity, wall unit, and custom
            creations, we turn your visions into reality. Trust MTC Millwork to
            elevate your living and working spaces with craftsmanship,
            innovation, and a commitment to excellence. Contact us today to
            embark on your millwork journey with us.
          </p>
        </div>
      </div>
      <div className="bordered lg:w-1/2 lg:border-r-0">
        <Image
          className="object-cover max-lg:max-h-[400px] lg:min-h-[600px]"
          src={aboutUsImage}
          alt=""
        />
      </div>
    </div>
  );
}
