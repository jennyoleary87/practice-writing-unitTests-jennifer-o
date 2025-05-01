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

function addItem(cart, item, quantity) {
    if (quantity >= 1) {
        cart.items.push({ item, quantity });
        return "items add to the cart.";
    } else {
        return "Quantity must be one or more.";
    }
}

function removeItem(cart, item) {
    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].item === item) {
            cart.items.splice(i, 1);
            return "items removed from cart.";
        }
    }
    return "items not found in cart.";
}

function getTotalItems(cart) {
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].quantity;
    }
    return total;
}

module.exports = { addItem, removeItem, getTotalItems };
