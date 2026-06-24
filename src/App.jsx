import React, { useState } from "react";
import "./App.css";
import "./index.css";
function App() {
  const shoesData = [
    { id: 1, name: "Nike Air Max", price: 5000, image: "https://www.bing.com/th/id/OIP.Gz8oFS574FwW4Ml7B30iAQHaIq?w=193&h=226&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" },
    { id: 2, name: "Adidas Ultraboost", price: 6000, image: "https://th.bing.com/th/id/OIP.Avm10ogpe52EogRVDbio8QHaEK?w=300&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    { id: 3, name: "Puma Running Shoes", price: 4500, image: "https://th.bing.com/th/id/OIP.JyKRZe0PAdemEd5rvYTsMQHaHa?w=200&h=187&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    { id: 4, name: "Loafers", price: 4200, image: "https://th.bing.com/th/id/OIP.L1aID5M73gCaSb_UATzHAgHaFG?w=288&h=198&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    { id: 5, name: "Adidas ", price: 2500, image: "https://th.bing.com/th/id/OIP.5COQ3-_2WzoetVlJWah31gHaHa?w=131&h=150&c=6&o=7&dpr=1.1&pid=1.7&rm=3" },
    { id: 6, name: "Moccasins ", price: 3900, image: "https://th.bing.com/th/id/OIP.nQ2G9KJ_-1eWRD6dCUAH0gHaHa?w=214&h=215&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" },
    
  ];

  const [cart, setCart] = useState([]);
  const addToCart = (shoe) => {
    const existingItem = cart.find((item) => item.id === shoe.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...shoe, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">👟 </h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="shoes-section">
          <h2>Available Shoes</h2>
          <div className="shoe-grid">
            {shoesData.map((shoe) => (
              <div key={shoe.id} className="shoe-card">
                <img src={shoe.image} alt={shoe.name} />
                <h3>{shoe.name}</h3>
                <p>₹{shoe.price}</p>
                <button onClick={() => addToCart(shoe)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is Empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => removeFromCart(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="Total">
              <h3>Total: ₹{total}</h3>
              <h3>Thank You for shoping!!</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
