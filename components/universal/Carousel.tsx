"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isShowImage, setIsShowImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="bordered flex w-full flex-col items-center py-10">
      <div className="flex w-full items-center gap-10">
        <div
          className="bordered relative left-10 cursor-pointer bg-neutral text-4xl"
          onClick={() =>
            setCurrentImageIndex((prev) =>
              currentImageIndex > 0 ? prev - 1 : images.length - 1,
            )
          }
        >
          <IoIosArrowBack />
        </div>
        <Image
          className="bordered mx-auto h-[600px] w-[70%] cursor-pointer object-cover"
          onClick={() => {
            setIsShowImage(true);
            setSelectedImageIndex(currentImageIndex);
          }}
          width={1200}
          height={600}
          src={images[currentImageIndex]}
          alt=""
        />
        <div
          className="bordered relative right-10 rotate-180 cursor-pointer bg-neutral text-4xl"
          onClick={() =>
            setCurrentImageIndex((prev) =>
              currentImageIndex == images.length - 1 ? 0 : prev + 1,
            )
          }
        >
          <IoIosArrowBack />
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, index) => {
          return (
            <div key={index}>
              <Image
                className={`h-20 w-28 cursor-pointer object-cover ${currentImageIndex == index ? "border-secondary border-2" : "opacity-50"}`}
                width={200}
                height={100}
                src={image}
                alt=""
                onClick={() => setCurrentImageIndex(index)}
              />
            </div>
          );
        })}
      </div>
      {isShowImage && (
        <div
          className="fixed left-0 top-0 flex w-full h-full cursor-pointer items-center justify-center z-50 bg-[rgba(0,0,0,0.8)]"
          onClick={() => setIsShowImage(false)}
        >
          <Image
            className="mx-auto w-[60%]"
            width={1900}
            height={1080}
            priority
            src={images[selectedImageIndex]}
            alt=""
          />
        </div>
      )}
    </div>
  );
}
