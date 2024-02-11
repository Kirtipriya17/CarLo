import React, { useState } from 'react';

function AddToCartButton() {
  // State to track the number of items in the cart
  const [cartCount, setCartCount] = useState(0);

  // Function to handle adding an item to the cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      {/* Button to add item to cart */}
      <button onClick={addToCart}>Add to Cart</button>
      
      {/* Display the number of items in the cart */}
      <p>Items in cart: {cartCount}</p>
    </div>
  );
}

export default AddToCartButton;
