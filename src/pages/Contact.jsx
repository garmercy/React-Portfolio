export default function Contact() {
  return (
    <div className="container mt-5">
    <h1 id='titleH1'>Contact Us</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label" id="contactForm">
          Name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label" id="contactForm">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label" id="contactForm">
          Message
        </label>
        <textarea className="form-control" id="message" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
}
