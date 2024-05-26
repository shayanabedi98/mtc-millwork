import Carousel from "../universal/Carousel";

export default function OurWork() {
  return (
    <div className="bordered container flex flex-col items-center justify-center py-8">
      <h3 className="title mb-8">Our Work</h3>
      <Carousel
        images={[
          "/assets/otherPictures/ourServicesHome.webp",
          "/assets/otherPictures/aboutUsHome.webp",
          "/assets/otherPictures/ourServicesHome.webp",
          "/assets/otherPictures/homeHero.webp",
          "/assets/otherPictures/ourServicesHome.webp",
        ]}
      />
    </div>
  );
}
