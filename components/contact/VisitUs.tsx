import Image from "next/image";

export default function VisitUs() {
  return (
    <div className="container-padding container my-0">
      <div className="bordered container-padding mx-auto flex w-2/3 flex-col items-center justify-center bg-info px-10">
        <div className="flex justify-center gap-12">
          <div className="flex w-1/2 flex-col items-start gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="title">Visit Us</h3>
              <p>
                Discover timeless craftsmanship at our showroom! Explore
                exquisite millwork and cabinetry creations that elevate your
                living spaces. Join us for an exclusive tour today and let our
                expert team bring your design dreams to life. Experience the
                artistry firsthand. See you soon!
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl">Address</h4>
              <a
                href="https://maps.app.goo.gl/ZnYTTP6yMtPtmHaC7"
                target="_blank"
              >
                8111 Jane st, unit 5, Concord Ontario L4K 7L4 CA
              </a>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-3xl">Hours</h4>
              <div className="flex gap-6">
                <p className="w-24">Mon - Fri</p>
                <p>8:00 am - 5:00 pm</p>
              </div>
              <div className="flex gap-6">
                <p className="w-24">Saturday</p>
                <p>9:00 am - 3:00 pm</p>
              </div>
              <div className="flex gap-6">
                <p className="w-24">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 border">
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92095.07392930784!2d-79.56979723416856!3d43.83569799804479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f228c9cc619%3A0x9d7ea84b22190e8d!2sMTC%20Millwork%20inc!5e0!3m2!1sen!2sca!4v1716955952297!5m2!1sen!2sca"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
