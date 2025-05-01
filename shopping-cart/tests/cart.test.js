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
describe("", () => {
    test("", () => {
        expect(cart("")).toBe("");
    });

    test("", () => {
        expect(cart()).toBe("");
    });
});
*/

const cart = require('../cart');
const { addItem, removeItem, getTotalItems } = cart;

describe("SHOPPING CART", () => { // collect all test cases into one ; then organize by function
    let cart;

    describe("addItem", () => { // test cases for addItem
        test("should add a new item with valid name and quantity", () => {
            cart = { items: [] };
            // expect(cart.addItem(cart, "orange", 3)).toBe("items add to the cart.");
            const input = addItem(cart, "kiwi", 3);
            expect(input).toBe("items add to the cart.");
            expect(cart.items).toEqual([{ item: "kiwi", quantity: 3 }]);
        });

        test("should not add an item with a negative quantity", () => {
            cart = { items: [] };
            const input = addItem(cart, "banana", -1);
            expect(input).toBe("Quantity must be one or more.");
        });

        test("should not add an item with a quantity of 0", () => {
            cart = { items: [] };
            const input = addItem(cart, "orange", 0);
            expect(input).toBe("Quantity must be one or more.");
        });
    });

    describe("removeItem", () => { // test cases for removeItem
        test("should remove an existing item from the cart", () => {
            cart = { items: [] };
            addItem(cart, "pineapple", 4);
            const input = removeItem(cart, "pineapple");
            expect(input).toBe("items removed from cart.");
        });

        test("should not attempt to remove an item not in the cart", () => {
            cart = { items: [] };
            const input = removeItem(cart, "guava");
            expect(input).toBe("items not found in cart.");
        });

        test("should remove the last item from the cart", () => {
            cart = { items: [] };
            addItem(cart, "tomato", 6);
            const input = removeItem(cart, "tomato");
            expect(input).toBe("items removed from cart.");
        });
    });

    describe("getTotalItems", () => { // test cases for getTotalItems
        test("should calculate the total number of items correctly", () => {
            cart = { items: [] };
            addItem(cart, "cherry", 6);
            addItem(cart, "coconut", 4);
            const total = getTotalItems(cart);
            expect(total).toBe(10);
        });

        test("should handle an empty cart", () => {
            cart = { items: [] };
            const total = getTotalItems(cart);
            expect(total).toBe(0);
        });

        test("should calculate with large quantities", () => {
            cart = { items: [] };
            addItem(cart, "blueberry", 30);
            addItem(cart, "cherry", 60);
            const total = getTotalItems(cart);
            expect(total).toBe(90);
        });
    });
});

// jest = run with "npm test" in terminal
