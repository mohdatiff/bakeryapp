import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Images
import bread from "../assets/img1.jpg";
import cake from "../assets/img2.jpg";
import cookies from "../assets/img3.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";
import aboutImg from "../assets/about.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const products = [
    {
      image: bread,
      title: "Artisan Bread",
      desc: "Crispy outside, soft inside. Made fresh daily.",
    },
    {
      image: cake,
      title: "Signature Cakes",
      desc: "Perfect for birthdays, weddings & more.",
    },
    {
      image: cookies,
      title: "Buttery Cookies",
      desc: "Melt-in-mouth cookies in many flavors.",
    },
  ];

  return (
    <>
      {/* ===== Carousel Section ===== */}
      <div
        id="bakeryCarousel"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
        data-bs-interval="2000"
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          {[banner1, banner2, banner3].map((banner, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
            >
              <img
                src={banner}
                className="d-block w-100"
                alt={`Banner ${idx + 1}`}
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bakeryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bakeryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ===== Specialties Section ===== */}
      <div className="container py-5">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Our Specialties
        </h2>
        <div className="row">
          {products.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card h-100 shadow-sm card-hover"
                data-aos="zoom-in"
              >
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.desc}</p>
                  <button className="btn order-btn mt-2">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={aboutImg}
              alt="About Our Bakery"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="mb-3">About Our Bakery</h2>
            <p className="text-muted">
              At <strong>Majestic Bakers</strong>, we’ve been crafting the
              finest baked delights since 1995. From soft breads to elegant
              cakes and melt-in-your-mouth cookies, everything is made with
              love, tradition, and high-quality ingredients.
            </p>
            <ul className="list-unstyled text-muted mb-4">
              <li>🍞 100% Fresh & Handmade</li>
              <li>🎂 Custom Cakes for All Occasions</li>
              <li>🌿 Natural Ingredients Only</li>
              <li>🏆 Award-Winning Recipes</li>
            </ul>
            <button className="btn btn-dark px-4">Visit Us Today</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
