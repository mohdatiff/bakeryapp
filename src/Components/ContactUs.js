import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead text-muted">We'd love to hear from you!</p>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow h-100">
              <h4 className="mb-4">📞 Get in Touch</h4>
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                123 Baker Street, Bandra West, Mumbai - 400050
              </p>
              <p>
                <FaPhoneAlt className="me-2 text-primary" />
                +91 98765 43210
              </p>
              <p>
                <FaEnvelope className="me-2 text-primary" />
                hello@majesticbakers.com
              </p>

              <hr />

              <h5 className="mb-3">Follow us</h5>
              <div className="d-flex gap-3 fs-4">
                <a href="#" className="text-decoration-none text-danger">
                  <FaInstagram />
                </a>
                <a href="#" className="text-decoration-none text-primary">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-primary px-4 py-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
