import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ckearney1992@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h1 className="page-title">Contact</h1>

      <div className="contact-page">
        <p>
          Want to get in touch? Send me a message using the form below.
        </p>

        {status === "idle" && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength="1"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                minLength="5"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                minLength="20"
              />
            </div>

            <button type="submit">
              Send Message
            </button>
          </form>
        )}

        {status === "sending" && (
          <p className="contact-status sending">
            Sending your message...
          </p>
        )}

        {status === "success" && (
          <p className="contact-status">
            Thanks for your email! I'll be in touch as soon as I can.
          </p>
        )}

        {status === "error" && (
          <p className="contact-status">
            Sorry, that didn't work. Please refresh the page and try again.
            Alternatively, you can contact me through Instagram or LinkedIn.
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;