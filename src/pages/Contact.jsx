function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        Want to get in touch? Send me a message using the form below.
      </p>

      <form>
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

      <section>
        <h2>Socials</h2>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="YOUR_INSTAGRAM_URL"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </section>
    </div>
  );
}

export default Contact;