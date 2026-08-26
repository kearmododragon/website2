function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        Want to get in touch? Send me a message using the form below.
      </p>

      <form
        action="https://formsubmit.co/ckearney1992@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
          />
        </div>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;