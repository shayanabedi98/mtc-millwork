import AboutUs from "@/components/home/AboutUs";
import HomeHero from "@/components/home/HomeHero";
import IconsContainer from "@/components/home/IconsContainer";
import OurServices from "@/components/home/OurServices";
import OurWork from "@/components/home/OurWork";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <OurServices />
      <IconsContainer />
      <AboutUs />
      <OurWork />
    </main>
  );
}
