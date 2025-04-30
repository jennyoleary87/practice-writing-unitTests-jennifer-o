/*
04/24/25
Test-Driven Development - 1 Practice: Writing Unit Tests

Implement and test a basic shopping cart module.
The module should include the following methods:
1. addItem(cart, item, quantity): Adds an item to the cart.
2. removeItem(cart, item): Removes an item from the cart.
3. getTotalItems(cart): Returns the total number of items in the cart.
===== TASKS =====
1. Define the Module:
○ Create a file named cart.js and define the required methods.
○ Export the methods using module.exports.
*/
let cart = [];

function addItem(cart, item, quantity) {
    // need valid item name and quantity number
    if (quantity >= 1) { // if valid quantity number
        cart.push({ name: item, quantity }); // then add item to cart
    } else if (quantity < 1) { // if invalid quantity number
        throw new Error("Invalid quantity number"); // then display error message
    }

}

function removeItem(cart, item) {
    for (item of cart) {
        if (item === Item) {
            cart.splice(item);
        } else {
            return "Item not found";
        }
    }
}

function getTotalItems(cart) {
    return cart.length;
}

module.exports = { addItem, removeItem, getTotalItems };
