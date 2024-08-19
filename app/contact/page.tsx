import Questions from "@/components/contact/Questions";
import VisitUs from "@/components/contact/VisitUs";
import Hero from "@/components/universal/Hero";
import { heroPictures } from "@/utils/imageStructure";

export default function Contact() {
  return (
    <main>
      <Hero
        src={heroPictures[2]}
        alt="Modern kitchen with beautiful wood cabinets and island."
        h1="CONTACT"
        heroClass="hero1"
      />
      <div className="container">
        <Questions />
        <VisitUs />
      </div>
    </main>
  );
}
