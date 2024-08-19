import Link from "next/link";
import Carousel from "../universal/Carousel";

export default function OurWork() {
  return (
    <div className="container-padding container mb-0 flex flex-col items-center justify-center">
      <h3 className="title mb-8">Our Work</h3>

      <Carousel
        images={[
          "/assets/mtc-webp/project7/2.webp",
          "/assets/mtc-webp/project1/5.webp",
          "/assets/mtc-webp/project2/5.webp",
          "/assets/mtc-webp/project1/6.webp",
          "/assets/mtc-webp/project4/5.webp",
        ]}
      />
      {/* <p className="mt-10 mx-auto mb-10 w-[80%] text-start">
        At MTC Millwork, we pride ourselves on delivering exceptional quality
        and ensuring complete customer satisfaction. Our team of skilled
        craftsmen is dedicated to creating custom millwork solutions that meet
        the highest standards of excellence. We invite you to explore some of
        our recent projects, each a testament to our commitment to precision,
        innovation, and craftsmanship. Whether you&apos;re looking for bespoke
        cabinetry, intricate woodwork, or custom furniture, we&apos;re confident
        that our portfolio will inspire and impress. Thank you for considering
        MTC Millwork for your next project.
      </p> */}
      <Link href="/projects" className="btn mt-10">
        See More
      </Link>
    </div>
  );
}
