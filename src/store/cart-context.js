import React from 'react';

const CartContext = React.createContext({
  items: [],
  // comment 123
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;