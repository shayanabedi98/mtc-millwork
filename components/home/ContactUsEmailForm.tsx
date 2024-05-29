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

      formData.append("access_key", "c3cd9d5f-aa96-47ca-9e1f-abc7ef7ca1b1");

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
      <form onSubmit={onSubmit} className="flex flex-col gap-2 text-secondary">
        <input
          value={honeyPot}
          onChange={(e) => setHoneyPot(e.target.value)}
          type="text"
          placeholder="subject"
          name="subject"
          className="hidden"
        />
        <div className="flex gap-[12px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" required />
          </div>
          <div className="flex flex-col gap-2">
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
        <button type="submit" className="btn2 my-4 w-full">
          Submit Form
        </button>
      </form>
      <span className="flex justify-center">{result}</span>
    </div>
  );
}
