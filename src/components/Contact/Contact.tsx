const Contact = () => {
  return (
    <div className="Contact mb-36">
      <h1>Contact me</h1>
      <h2 className="AccentFont">
        Get in touch with me through any of my social accounts, or by using the
        form below. You can also email me directly at
        hello@lucassilbernagel.com.
      </h2>
      <form
        action="https://formspree.io/f/xkndywly"
        method="POST"
        aria-label="Enter your information below to send me a message"
        className="flex flex-col gap-3 mx-auto max-w-lg"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          required
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          required
          className="min-h-[100px]"
        ></textarea>
        <div className="w-full flex justify-center">
          <button type="submit" className="AccentButton" name="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
