import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  h1: string;
  //   h2: string;
  heroClass: string;
};

export default function Hero({ src, alt, h1, heroClass }: Props) {
  return (
    <div className="bordered relative mt-28 border-l-0 border-r-0">
      <div>
        <Image
          priority
          className={`${heroClass} h-[700px] w-full object-cover`}
          src={src}
          alt={alt}
          width={3000}
          height={500}
        />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-[rgba(0,0,0,0.05)]">
        <h1 className="hero-header">{h1}</h1>
        {/* <h2>{h2}</h2> */}
      </div>
    </div>
  );
}
