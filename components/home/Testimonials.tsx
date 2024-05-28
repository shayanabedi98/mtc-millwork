"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Shayan Abedi, CA",
      review:
        "I'm thoroughly impressed with the custom shelving MTC Millwork Inc. installed in my living room. They provided a brilliant design that made the most of the available space. The crew was professional and courteous, and the installation was finished promptly and within our budget. The materials they use are of exceptional quality, and the finished product far exceeded my expectations. I highly recommend them and will definitely use their services again in the future.",
    },
    {
      name: "Carmen Klopper, CA",
      review:
        "I am very happy with my kitchen. MTC Millwork inc provided an outstanding design that best utilized the small space they had to work with. The team were professional and the installation was completed on schedule and within our budget. The products they use are high quality and the completed kitchen exceeded my expectations. I recommend them highly and will definitely use them again in future.",
    },
    {
      name: "Dela Bahmani, CA",
      review:
        "I couldn't be more pleased with the new cabinetry in my home. MTC Millwork Inc. delivered a superb design that maximized the functionality of our limited space. The team was professional, and the installation was finished on time and within our budget. They use top-notch materials, and the final result surpassed all my expectations. I highly recommend their services and will certainly turn to them for any future projects.",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="testimonials container-padding gapped container my-0 flex items-center justify-center text-primary">
      <IoIosArrowBack
        className="relative left-10 cursor-pointer text-5xl"
        onClick={() => {
          setTestimonialIndex((prev) =>
            prev === 0 ? testimonialsList.length - 1 : prev - 1,
          );
        }}
      />

      <div className="gapped flex w-full flex-col items-center">
        <h3 className="title">Testimonials</h3>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={testimonialIndex}
            className="gapped relative mx-auto flex max-w-[768px] flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="flex h-64 items-center text-2xl font-normal">
              &quot;{testimonialsList[testimonialIndex].review}&quot;
            </p>
            <p className="text-lg font-normal">
              {testimonialsList[testimonialIndex].name}
            </p>
          </motion.div>
          <div className="flex justify-center gap-5">
            {testimonialsList.map((i, index) => {
              return (
                <FaRegCircle
                  onClick={() => setTestimonialIndex(index)}
                  key={index}
                  // style={{ fill: index === testimonialIndex ? "" : ""}}
                  className={`cursor-pointer rounded-full ${index === testimonialIndex ? "bg-primary" : ""}`}
                />
              );
            })}
          </div>
        </AnimatePresence>
      </div>
      <IoIosArrowBack
        className="relative right-10 rotate-180 cursor-pointer text-5xl"
        onClick={() => {
          setTestimonialIndex((prev) =>
            prev === testimonialsList.length - 1 ? 0 : prev + 1,
          );
        }}
      />
    </div>
  );
}
