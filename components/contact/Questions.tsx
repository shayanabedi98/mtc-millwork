import ContactUsEmailForm from "../home/ContactUsEmailForm";

export default function Questions() {
  return (
    <div className="">
      <div className="bordered py-8 lg:container-padding mx-auto flex w-full flex-col items-center justify-center gap-12 bg-info max-lg:px-4 px-10 lg:w-2/3 xl:flex-row">
        <div className="flex w-full flex-col max-xl:text-center items-center xl:items-start justify-center gap-8 xl:w-1/2">
          <h3 className="title">Questions?</h3>
          <p className="">
            We got you! leave us your info and our sales team will contact you
            as soon as possible and we will answer all your questions.
          </p>
          <p>We will get back to you within 48 hours.</p>
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex flex-col">
              <p className="max-xl:font-bold">Email</p>
              <a href="mailto:info@MTCMillwork.ca">info@MTCMillwork.ca</a>
            </div>
            <div className="flex flex-col">
              <p className="max-xl:font-bold">Phone</p>
              <a href="tel:+14165000045">+1 416 500 0045</a>
            </div>
          </div>
        </div>
        <div className="flex w-full xl:w-1/2 items-center justify-center">
          <ContactUsEmailForm />
        </div>
      </div>
    </div>
  );
}
