"use client";

import { useState } from "react";

export default function ContactUsEmailForm() {
  const [result, setResult] = useState("");
  const [honeyPot, setHoneyPot] = useState("");

  const onSubmit = async (event: any) => {
    if (!honeyPot) {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "a8b9d83a-e32b-479d-bd3d-45faf34678a2");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent!");
        event.target.reset();
        setTimeout(() => {
          setResult("");
        }, 10000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };

  return (
    <div className="contact-home">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex flex-col items-center gap-2 text-secondary max-lg:max-w-96"
      >
        <input
          value={honeyPot}
          onChange={(e) => setHoneyPot(e.target.value)}
          type="text"
          placeholder="subject"
          name="subject"
          className="hidden"
        />
        <div className="name flex w-full gap-[12px]">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" required />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" required />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" inputMode="numeric" />
        <label htmlFor="message">Message</label>
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="from_name"
          value="MTC Millwork Website"
        ></input>
        <button type="submit" className="btn2 my-4 w-full">
          Submit Form
        </button>
      </form>
      <span className="flex justify-center">{result}</span>
    </div>
  );
}
