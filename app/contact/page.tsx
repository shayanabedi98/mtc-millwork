import ContactUsEmailForm from "@/components/contact/ContactUsEmailForm";
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
      <ContactUsEmailForm />
    </main>
  );
}
