export default function ContactMe() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const firstName = document.getElementById("first-name").value
    const lastName = document.getElementById("last-name").value
    const phoneNumber = document.getElementById("phone-number").value
    const message = document.getElementById("message").value

    let mailtoLink =
      `mailto:${email}` +
      `?subject=Contact Submission - from ${firstName} ${lastName}` +
      `&body=First Name: ${firstName}` +
      `%0D%0A` +
      `Last Name: ${lastName}` +
      `%0D%0A` +
      `Phone Number: ${phoneNumber}` +
      `%0D%0A` +
      `Message: ${message}`

    window.location.href = mailtoLink
  }
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get in Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out to me using the form below, and I'll get back
          to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message here"
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  )
}
