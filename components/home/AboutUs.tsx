import Image from "next/image";
import aboutUsImage from "@/public/assets/otherPictures/aboutUsHome.webp";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="container flex justify-center">
      <div className="border-base-100 flex w-1/2 flex-col items-center justify-center border-[1px]">
        <div className="flex w-2/3 flex-col gap-10 leading-7">
          <h3 className="title">About Us</h3>
          <p>
            <span className="font-bold text-base-100 text-xl">MTC Millwork</span> is a Canadian-based business since 2018, is your
            destination for top-tier millwork solutions in the Greater Toronto
            Area &#40;GTA&#41;. Equipped with cutting-edge machinery, our skilled team
            excels in detailed residential and commercial projects, from design
            to installation. With a passion for precision and a portfolio filled
            with exquisite kitchen, closet, vanity, wall unit, and custom
            creations, we turn your visions into reality. Trust MTC Millwork to
            elevate your living and working spaces with craftsmanship,
            innovation, and a commitment to excellence. Contact us today to
            embark on your millwork journey with us.
          </p>
        </div>
      </div>
      <div className="border-base-100 w-1/2 border-[1px] border-r-0">
        <Image src={aboutUsImage} alt="" />
      </div>
    </div>
  );
}
