// Your job is to build a simple UI, which allows a customer to do the following:
// Browse the catalog on a product listing page
// Each card should have the image, name and price.
// Search using free text which is a combination of one or more of the below attributes
//  Name
//  Colour
//  Type
//  Eg. green polo
//  APIs Provided
//  We provide you an Catalogue API to list all the products and their properties.
// Request Type :
//  GET
// Endpoint :
//  https://geektrust/catalogue.json

import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAdd = () => {
    //when click on add to cart button add the product added to cart page 
    //add the product to cart local storage
    const cart = localStorage.getItem("cart");
    if (cart) {
        const cartItems = JSON.parse(cart);
        localStorage.setItem("cart", JSON.stringify([...cartItems, products]));
        }
    else {
        localStorage.setItem("cart", JSON.stringify([products]));
    }
    alert("Added to cart")
  };

  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div className={styles.productCard} onClick={handleAdd}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="priceBox">
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
