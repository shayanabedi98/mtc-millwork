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
      />
      <div className="container">
        <div className="container-padding">
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
        <div className="container-padding">
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
        <div className="container-padding">
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
        <div className="container-padding">
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
        <div className="container-padding">
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
