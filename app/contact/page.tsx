import Questions from "@/components/contact/Questions";
import VisitUs from "@/components/contact/VisitUs";
import Hero from "@/components/universal/Hero";

export default function Contact() {
  return (
    <main>
      <Hero
        src="/assets/otherPictures/hero4.webp"
        alt="Modern kitchen with beautiful wood cabinets and island."
        h1="CONTACT"
        heroClass="hero1"
      />
      <Questions />
      <VisitUs />
    </main>
  );
}
