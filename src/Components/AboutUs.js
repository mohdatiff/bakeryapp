import React, { useEffect } from "react";
import image1 from "../assets/image1.jpg"; // Banner image
import image2 from "../assets/image2.png"; // Content image
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const styles = {
    about: {
      backgroundColor: "#f8f9fa",
      paddingBottom: "60px",
    },
    back: {
      position: "relative",
      textAlign: "center",
    },
    bannerText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      fontSize: "3rem",
      fontWeight: "bold",
      zIndex: 2,
    },
    bannerImage: {
      width: "100%",
      maxHeight: "400px",
      objectFit: "cover",
      filter: "brightness(0.7)",
      zIndex: 1,
    },
    heading: {
      fontSize: "2.5rem",
      color: "#555",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#777",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.8",
      marginBottom: "20px",
    },
    image: {
      borderRadius: "8px",
      maxWidth: "100%",
      height: "auto",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  };

  return (
    <section style={styles.about}>
      {/* Banner Section */}
      <div style={styles.back}>
        <Container>
          <h1 style={styles.bannerText}>About Us - Majestic Bakers</h1>
        </Container>
        <img src={image1} alt="Bakery Banner" style={styles.bannerImage} />
      </div>

      {/* Content Section */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col data-aos="fade-right" lg={6} md={12}>
            <h1 style={styles.heading} data-aos="fade-up">
              Our Baking Journey
            </h1>
            <p style={styles.subtitle} data-aos="fade-up" data-aos-delay="100">
              Discover the heart and soul behind Majestic Bakers
            </p>
            <p style={styles.paragraph} data-aos="fade-up" data-aos-delay="200">
              At Majestic Bakers, we believe baking is more than a craft—it's a
              passion that connects people through flavors, memories, and
              traditions. Since our founding, we've been dedicated to delivering
              freshly baked delights made with love and the finest ingredients.
            </p>
            <p style={styles.paragraph} data-aos="fade-up" data-aos-delay="300">
              From artisan breads to decadent pastries, every item on our menu
              is crafted to perfection. Whether you're stopping by for your
              morning croissant or ordering a custom cake for a special
              occasion, Majestic Bakers brings joy in every bite.
            </p>
          </Col>

          {/* Image Section */}
          <Col data-aos="zoom-in" lg={6} md={12}>
            <img src={image2} alt="Our Bakery" style={styles.image} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
