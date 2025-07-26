import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer_v2 bg-light pt-4" data-aos="fade-up">
      <div className="container container-v2">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-2 col-md-3" data-aos="fade-right">
            <div className="info_us">
              <h5 className="text-uppercase fw-bold" style={{ color: "black" }}>
                The Majestic Bakers
              </h5>
              <p className="small text-muted">Baking with love since 1990</p>
            </div>
          </div>

          {/* Column 2 */}
          <div
            className="col-lg-2 col-md-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="info_footer">
              <h6 className="fw-bold">Explore</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-decoration-none text-dark">
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-decoration-none text-dark"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="/speciality-cakes"
                    className="text-decoration-none text-dark"
                  >
                    Speciality Cakes
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="text-decoration-none text-dark">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/csr" className="text-decoration-none text-dark">
                    CSR
                  </a>
                </li>
                <li>
                  <a href="/sitemap" className="text-decoration-none text-dark">
                    HTML Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div
            className="col-lg-2 col-md-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info_footer">
              <h6 className="fw-bold">Info</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-decoration-none text-dark"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cookie-policy"
                    className="text-decoration-none text-dark"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/refund-policy"
                    className="text-decoration-none text-dark"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-decoration-none text-dark">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/nutrition"
                    className="text-decoration-none text-dark"
                  >
                    Nutritional Info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-lg-3 col-md-3" data-aos="fade-left">
            <div className="info_footer">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="mb-1">
                📞{" "}
                <a
                  href="tel:+918108138392"
                  className="text-decoration-none text-dark"
                >
                  +91 8108138392
                </a>
              </p>
              <p className="mb-2">
                📧{" "}
                <a
                  href="mailto:contact@majesticbakers.com"
                  className="text-decoration-none text-dark"
                >
                  contact@majesticbakers.com
                </a>
              </p>
              <div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2 text-dark"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2 text-dark"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="col-lg-3" data-aos="fade-left" data-aos-delay="200">
            <div className="info_footer">
              <h6 className="fw-bold">Sign up for updates</h6>
              <form>
                <div className="input-group mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <button className="btn btn-dark" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="text-muted small">
                Stay updated with our latest bakes and offers.
              </p>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center py-2 small">
          © {new Date().getFullYear()} The Majestic Bakers. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
