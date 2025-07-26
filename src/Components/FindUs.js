import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="container py-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Find Us</h1>
        <p className="lead text-muted">
          Visit any of our bakery branches across Mumbai!
        </p>
      </div>

      {/* Contact Info & Map */}
      <div className="row align-items-start mb-5 g-4">
        {/* Branch Info */}
        <div className="col-lg-6">
          {/* Branch 1 */}
          <div className="p-4 shadow-sm rounded bg-light mb-4">
            <h5 className="mb-2">
              <FaMapMarkerAlt className="text-danger me-2" />
              Main Branch
            </h5>
            <p className="mb-1">
              123 Baker Street, Bandra West, Mumbai - 400050
            </p>
            <p className="mb-1">
              <FaPhoneAlt className="me-2 text-primary" />
              +91 98765 43210
            </p>
            <p>
              <FaClock className="me-2 text-warning" />
              8:00 AM – 10:00 PM
            </p>
          </div>

          {/* Branch 2 */}
          <div className="p-4 shadow-sm rounded bg-light mb-4">
            <h5 className="mb-2">
              <FaMapMarkerAlt className="text-danger me-2" />
              New Branch
            </h5>
            <p className="mb-1">45 Aroma Lane, Andheri East, Mumbai - 400093</p>
            <p className="mb-1">
              <FaPhoneAlt className="me-2 text-primary" />
              +91 91234 56789
            </p>
            <p>
              <FaClock className="me-2 text-warning" />
              9:00 AM – 11:00 PM
            </p>
          </div>

          {/* Branch 3 (optional) */}
          <div className="p-4 shadow-sm rounded bg-light">
            <h5 className="mb-2">
              <FaMapMarkerAlt className="text-danger me-2" />
              Dadar Branch
            </h5>
            <p className="mb-1">78 Delight Road, Dadar West, Mumbai - 400028</p>
            <p className="mb-1">
              <FaPhoneAlt className="me-2 text-primary" />
              +91 99887 77665
            </p>
            <p>
              <FaClock className="me-2 text-warning" />
              7:30 AM – 9:30 PM
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="col-lg-6">
          <h5 className="mb-3 text-center">📍 Locate Us on the Map</h5>
          <div className="ratio ratio-16x9 shadow rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8278086011875!2d72.84013971490367!3d19.11714048707095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c993e0152ec5%3A0xe30132a91f1a25eb!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1620554741509!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Bakery Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-5">
        <h5 className="mb-3">📞 Contact & Support</h5>
        <p className="text-muted">
          <FaEnvelope className="me-2 text-danger" />
          Email:{" "}
          <a href="mailto:support@majesticbakers.in">
            support@majesticbakers.in
          </a>
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-danger fs-4"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary fs-4"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
