import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (itemName) => {
    setItems([...items, itemName]);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Button to add items */}
      <button onClick={() => addToCart('Item 1')}>Add Item 1</button>
      <button onClick={() => addToCart('Item 2')}>Add Item 2</button>
      <button onClick={() => addToCart('Item 3')}>Add Item 3</button>
      
      {/* Display saved items */}
      <h3>Saved Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
