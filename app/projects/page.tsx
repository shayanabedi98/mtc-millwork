import Carousel from "@/components/universal/Carousel";
import Hero from "@/components/universal/Hero";
import { heroPictures, projects } from "@/utils/imageStructure";

export default function Projects() {
  return (
    <main>
      <Hero
        src={heroPictures[3]}
        alt=""
        h1="PROJECTS"
        heroClass="hero3"
      />
      <div className="container">
        <div className="mx-auto flex w-3/4 flex-col gap-8 text-center lg:w-2/3">
          <h3 className="title">EXPLORE OUR WORK</h3>
          <p>
            At MTC Millwork, we specialize in transforming dreams into a
            functional and beautiful reality. Our experienced team handles
            everything from designing the layout and selecting the finest
            materials to building and installation.
          </p>
        </div>
        <div className="mt-14">
          <Carousel images={projects[0].map((pic) => pic)} />
        </div>
        <div className="mt-14">
          <Carousel images={projects[1].map((pic) => pic)} />
        </div>
        <div className="mt-14">
          <Carousel images={projects[2].map((pic) => pic)} />
        </div>
        <div className="mt-14">
          <Carousel images={projects[3].map((pic) => pic)} />
        </div>
        <div className="mt-14">
          <Carousel images={projects[4].map((pic) => pic)} />
        </div>
      </div>
    </main>
  );
}
