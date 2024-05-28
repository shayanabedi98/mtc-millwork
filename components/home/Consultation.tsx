import Link from "next/link";

export default function Consultation() {
  return (
    <div className="container gap-12 flex flex-col my-0 container-padding items-center justify-center">
      <h4 className="title">WE OFFER FREE CONSULTATION</h4>
      <p className="text-xl w-1/3 text-center mx-auto">
        CONTACT US TODAY AND TAKE ADVANTAGE OF OUR FREE CONSULTATION SERVICE!
      </p>
      <Link href="/contact" className="btn2">Contact Us</Link>
    </div>
  );
}
