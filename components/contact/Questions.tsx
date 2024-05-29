import ContactUsEmailForm from "../home/ContactUsEmailForm";

export default function Questions() {
  return (
    <div className="container my-0 container-padding">
      <div className="bordered container-padding mx-auto flex w-2/3 items-center justify-center gap-12 bg-info px-10">
        <div className="flex w-1/2 flex-col items-start justify-center gap-8">
          <h3 className="title">Questions?</h3>
          <p>
            We got you! leave us your info and our sales team will contact you
            as soon as possible and we will answer all your questions.
          </p>
          <p>We will get back to you within 48 hours.</p>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <p>Email</p>
              <a href="mailto:info@MTCMillwork.ca">info@MTCMillwork.ca</a>
            </div>
            <div className="flex flex-col">
              <p>Phone</p>
              <a href="tel:+14165000045">+1 416 500 0045</a>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <ContactUsEmailForm />
        </div>
      </div>
    </div>
  );
}
