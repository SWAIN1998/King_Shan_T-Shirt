import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  React.useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setCart(cartItems);
  }, []);
  const handleRemove = (id) => {
    //remove the product from cart local storage
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cart__title}>Cart</h1>
      <div className={styles.cart__container}>
        {cart.map((item) => (
          <div className={styles.cart__card}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <div className="priceBox">
              <p>{item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
