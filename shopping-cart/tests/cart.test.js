/*
04/24/25
Test-Driven Development - 1 Practice: Writing Unit Tests

2. Write Unit Tests:
○ Create a tests folder and add a file named cart.test.js.
○ Write tests for each method in the cart.js module, covering:
■ Positive Tests: Valid inputs producing expected results.
■ Negative Tests: Invalid inputs handled gracefully.
■ Edge Cases: Unusual or extreme values.
3. Run the Tests:
○ Use npm test to execute the tests and verify that all pass.
4. Refactor:
○ If any tests fail, modify the implementation in cart.js to pass all tests.

Example Scenarios for Testing:
1. addItem
○ Positive: Add a new item with a valid name and quantity.
○ Negative: Add an item with a negative quantity.
○ Edge Case: Add an item with a quantity of 0.
2. removeItem
○ Positive: Remove an existing item from the cart.
○ Negative: Attempt to remove an item not in the cart.
○ Edge Case: Remove the last item from the cart.
3. getTotalItems
○ Positive: Calculate the total number of items correctly.
○ Negative: Handle an empty cart.
○ Edge Case: Calculate with large quantities.

Base structure for test suite:
describe("", function () {
    test("", function () {
        expect(cart("")).toBe("");
    });

    test("", function () {
        expect(cart()).toBe("");
    });
});

*/

const cart = require('../cart');


// describe the cart (what you are testing)
describe("Shopping Cart", () => {

    test("should add new items to an empty cart", () => {
        // let cart = { items: [] }; // create empty cart to add items to
        // cart.addItem(cart, "orange", 3);
        expect(cart.addItem(cart, "orange", 3)).toBe("items add to the cart.");
    });

    test("should input quantity number as one or more", () => {

        expect(cart.removeItem(cart, "pear", 2)).toBe("items removed from cart.");
    });


});

