import hero from "@/assets/otherPictures/homeHero.webp";
import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="relative mt-28">
      <div className="h-[800px]">
        <Image
        className="h-full object-cover"
          priority
          src={hero}
          alt="Home kitchen with a beautiful countertop and modern cabinets"
        />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.3)]">
        <h1>Welcome to MTC Millwork</h1>
        <h2>Where we create timeless elegance</h2>
      </div>
    </div>
  );
}
