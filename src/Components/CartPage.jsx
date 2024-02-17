// CartPage.js
import React from 'react';

function CartPage({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.car}</span> - <span>{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
