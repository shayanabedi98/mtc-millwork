import Image from "next/image";

type Props = {
  direction: string;
  alt: string;
  src: string;
  content: string;
  title: string;
};

export default function ServicesInfo({
  direction,
  src,
  alt,
  title,
  content,
}: Props) {
  return (
    <div
      className={`flex flex-col py-6 max-lg:text-center ${direction}`}
    >
      <div className="flex w-full flex-col lg:w-1/2">
        <Image
          src={src}
          alt={alt}
          className="bordered h-full w-full object-cover"
          width={900}
          height={900}
        />
      </div>
      <div className="bordered flex w-full items-start justify-center max-lg:min-h-[270px] lg:w-1/2 lg:items-center">
        <div className="flex max-w-md flex-col justify-start gap-6 max-lg:p-4">
          <h3 className="title text-3xl">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
