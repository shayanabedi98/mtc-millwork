"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div
        className="loading relative flex aspect-square items-center rounded-full border border-accent shadow-xl"

      >
        <Image
          src={"/assets/otherPictures/logo-transparent.png"}
          alt=""
          priority
          width={600}
          height={600}
          className="mx-auto w-4/5"
        />
      </div>
    </div>
  );
}
