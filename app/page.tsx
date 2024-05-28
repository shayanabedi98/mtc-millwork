import AboutUs from "@/components/home/AboutUs";
import Consultation from "@/components/home/Consultation";
import ContactUs from "@/components/home/ContactUs";
import HomeHero from "@/components/home/HomeHero";
import IconsContainer from "@/components/home/IconsContainer";
import Map from "@/components/home/Map";
import OurServices from "@/components/home/OurServices";
import OurWork from "@/components/home/OurWork";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <OurServices />
      <IconsContainer />
      <AboutUs />
      <div className="bg-info">
        <OurWork />
      </div>
      <div className="bg-neutral">
        <Consultation />
      </div>
      <div className="bg-accent">
        <Testimonials />
      </div>
      <ContactUs />
      <Map />
    </main>
  );
}
