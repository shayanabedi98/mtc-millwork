import Carousel from "@/components/universal/Carousel";
import Hero from "@/components/universal/Hero";

export default function Projects() {
  return (
    <main>
      <Hero
        src="/assets/otherPictures/hero6.webp"
        alt=""
        h1="PROJECTS"
        heroClass="hero3"
        blurry="/assets/lowQuality/hero6.webp"
      />
      <div className="container">
        <div className="w-2/3 mx-auto text-center flex flex-col gap-8">
          <h3 className="title">EXPLORE OUR WORK</h3>
          <p>
            At MTC Millwork, we specialize in transforming dreams into a
            functional and beautiful reality. Our experienced team handles
            everything from designing the layout and selecting the finest
            materials to building and installation.
          </p>
        </div>
        <div className="mt-14">
          <Carousel
            images={[
              "/assets/projects/test1.webp",
              "/assets/projects/test2.webp",
              "/assets/projects/test3.webp",
              "/assets/projects/test4.webp",
              "/assets/otherPictures/homeHero.webp",
            ]}
          />
        </div>
        <div className="mt-14">
          <Carousel
            images={[
              "/assets/projects/test1.webp",
              "/assets/projects/test2.webp",
              "/assets/projects/test3.webp",
              "/assets/projects/test4.webp",
              "/assets/otherPictures/homeHero.webp",
            ]}
          />
        </div>
        <div className="mt-14">
          <Carousel
            images={[
              "/assets/projects/test1.webp",
              "/assets/projects/test2.webp",
              "/assets/projects/test3.webp",
              "/assets/projects/test4.webp",
              "/assets/otherPictures/homeHero.webp",
            ]}
          />
        </div>
        <div className="mt-14">
          <Carousel
            images={[
              "/assets/projects/test1.webp",
              "/assets/projects/test2.webp",
              "/assets/projects/test3.webp",
              "/assets/projects/test4.webp",
              "/assets/otherPictures/homeHero.webp",
            ]}
          />
        </div>
        <div className="mt-14">
          <Carousel
            images={[
              "/assets/projects/test1.webp",
              "/assets/projects/test2.webp",
              "/assets/projects/test3.webp",
              "/assets/projects/test4.webp",
              "/assets/otherPictures/homeHero.webp",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
