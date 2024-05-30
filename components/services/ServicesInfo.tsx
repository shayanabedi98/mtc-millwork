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
    <div className={`flex py-6 ${direction}`}>
      <div className="flex w-1/2 flex-col">
        <Image
          src={src}
          alt={alt}
          className="bordered h-full w-full object-cover"
          width={900}
          height={900}
        />
      </div>
      <div className="bordered flex w-1/2 items-center justify-center">
        <div className="flex max-w-md flex-col gap-6">
          <h3 className="title text-3xl">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
