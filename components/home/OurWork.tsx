import Carousel from "../universal/Carousel";

export default function OurWork() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h3 className="title mb-8">Our Work</h3>
      <Carousel
        images={[
          "/assets/otherPictures/aboutUsHome.webp",
          "/assets/otherPictures/ourServicesHome.webp",
          "/assets/otherPictures/homeHero.webp",
        ]}
      />
    </div>
  );
}
