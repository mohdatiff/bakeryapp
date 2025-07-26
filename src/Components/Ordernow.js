import React from "react";

const OrderNow = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="mb-4">Place Your Order</h1>
      <p className="lead text-muted">
        Customize your delicious treat and let us handle the rest!
      </p>

      <form className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="product" className="form-label">
            Product
          </label>
          <input
            type="text"
            className="form-control"
            id="product"
            placeholder="Product name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            placeholder="e.g., 2"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Delivery Address
          </label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            placeholder="Your complete address"
            required
          />
        </div>

        <button type="submit" className="btn btn-success px-4">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default OrderNow;
