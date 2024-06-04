import Link from "next/link";

export default function Consultation() {
  return (
    <div className="container-padding container my-0 flex flex-col items-center justify-center gap-12 max-lg:text-center">
      <h3 className="title">WE OFFER FREE CONSULTATION</h3>
      <p className="mx-auto w-3/4 text-center text-lg md:text-xl lg:w-1/3">
        CONTACT US TODAY AND TAKE ADVANTAGE OF OUR FREE CONSULTATION SERVICE!
      </p>
      <Link href="/contact" className="btn2">
        Contact Us
      </Link>
    </div>
  );
}
