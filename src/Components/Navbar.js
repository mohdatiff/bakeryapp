import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Find Us", path: "/store-locator" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "70px", width: "70px" }}
              className="me-2"
            />
            <span className="fw-bold fs-4 text-dark">Majestic Bakers</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link
                    className={`nav-link fw-semibold px-3 py-2 rounded ${
                      location.pathname === item.path
                        ? item.name === "Home"
                          ? "active-brown"
                          : "active-nav"
                        : item.name === "Home"
                        ? "home-brown"
                        : ""
                    }`}
                    to={item.path}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link
                  to="/order"
                  className="btn btn-brown ms-lg-3 px-4 py-2 fw-semibold"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom styles */}
      <style jsx="true">{`
        .nav-link {
          color: #333;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background-color: #ffe3ec;
          color: #d63384;
        }

        .active-nav {
          background-color: #d63384 !important;
          color: white !important;
        }

        .home-brown {
          color: #5d3a00;
        }

        .active-brown {
          background-color: #5d3a00 !important;
          color: white !important;
        }

        .btn-brown {
          background-color: #5d3a00;
          color: white;
          border-radius: 25px;
          transition: 0.3s ease-in-out;
        }

        .btn-brown:hover {
          background-color: #3e2900;
        }

        @media (max-width: 991px) {
          .btn-brown {
            width: 100%;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
