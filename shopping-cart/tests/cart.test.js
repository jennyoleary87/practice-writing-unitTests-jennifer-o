/*
■ Positive Tests: Valid inputs producing expected results.
■ Negative Tests: Invalid inputs handled gracefully.
■ Edge Cases: Unusual or extreme values.
*/

const cart = require('../cart');

cart.addItem(cart, "orange", 3);
cart.addItem(cart, "apple", 4);
cart.removeItem(cart, "apple");
cart.getTotalItems(cart);

