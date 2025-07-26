import React from "react";
import Product1 from "../assets/Product1.jpeg";
import Product2 from "../assets/Product2.jpg";
import Product3 from "../assets/Product3.jpg";
import Product4 from "../assets/Product4.jpg";
import Product5 from "../assets/Product5.webp";
import Product6 from "../assets/Product6.webp";
import Product7 from "../assets/Product7.webp";
import Product8 from "../assets/Product8.jpg";
import Product9 from "../assets/Product9.webp";
import Product10 from "../assets/Product10.jpg";
import Product11 from "../assets/Product11.jpeg";
import Product12 from "../assets/Product12.jpg";
import Product13 from "../assets/Product13.jpg";
import Product14 from "../assets/Product14.jpg";
import Product15 from "../assets/Product15.avif";

const Products = () => {
  const productList = [
    {
      name: "Classic Sourdough Bread",
      description: "Handcrafted sourdough with a crispy crust and soft center.",
      image: Product1,
      price: "₹199",
      badge: "Best Seller",
    },
    {
      name: "Belgian Chocolate Cake",
      description: "Rich and moist chocolate cake topped with ganache.",
      image: Product2,
      price: "₹499",
      badge: "New",
    },
    {
      name: "Almond Butter Cookies",
      description: "Crunchy cookies with the perfect nutty flavor.",
      image: Product3,
      price: "₹249",
    },
    {
      name: "Strawberry Cheesecake",
      description: "Creamy cheesecake topped with fresh strawberries.",
      image: Product4,
      price: "₹399",
      badge: "Limited",
    },
    {
      name: "Multigrain Loaf",
      description: "Healthy, hearty, and packed with seeds & grains.",
      image: Product5,
      price: "₹179",
    },
    {
      name: "Vanilla Cupcakes",
      description: "Fluffy vanilla cupcakes with creamy buttercream frosting.",
      image: Product6,
      price: "₹149",
      badge: "Popular",
    },
    {
      name: "Red Velvet Cupcake",
      description: "Moist red velvet cupcakes with cream cheese frosting.",
      image: Product7,
      price: "₹169",
    },
    {
      name: "French Croissant",
      description: "Flaky, buttery croissants made fresh every morning.",
      image: Product8,
      price: "₹129",
      badge: "Fresh",
    },
    {
      name: "Garlic Bread Loaf",
      description: "Warm garlic loaf topped with herbs and olive oil.",
      image: Product9,
      price: "₹189",
    },
    {
      name: "Pineapple Pastry",
      description: "Soft sponge cake layered with whipped cream and pineapple.",
      image: Product10,
      price: "₹89",
    },
    {
      name: "Chocolate Muffin",
      description: "Decadent muffin bursting with chocolate chips.",
      image: Product11,
      price: "₹99",
    },
    {
      name: "Cinnamon Roll",
      description: "Sweet cinnamon swirl with a creamy icing glaze.",
      image: Product12,
      price: "₹149",
      badge: "Hot",
    },
    {
      name: "Fruit Tart",
      description: "Crispy tart filled with custard and fresh seasonal fruits.",
      image: Product13,
      price: "₹199",
    },
    {
      name: "Baguette",
      description: "Traditional French baguette with crispy crust.",
      image: Product14,
      price: "₹89",
    },
    {
      name: "Chocolate Eclair",
      description: "Pastry filled with cream and coated with chocolate glaze.",
      image: Product15,
      price: "₹139",
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Freshly Baked Goodies</h1>
        <p className="lead text-muted">
          From oven to your plate — explore our finest selection of baked
          delights.
        </p>
        <hr className="w-25 mx-auto mb-4" />
      </div>

      <h2 className="text-center mb-4 fw-bold">Our Delicious Products</h2>

      <div className="row">
        {productList.map((product, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm position-relative product-card">
              {product.badge && (
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top"
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold">{product.name}</h5>
                  <p className="text-primary fw-bold">{product.price}</p>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
                <button className="order-btn mt-3 align-self-start">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles */}
      <style jsx="true">{`
        .order-btn {
          background-color: #d63384;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          transition: background-color 0.3s ease;
        }

        .order-btn:hover {
          background-color: #a61e5c;
        }

        .product-card:hover {
          transform: scale(1.02);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Products;
