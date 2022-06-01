const Basket = require("../src/basket.js")

describe("Basket", () => {
  it("add an item", () => {
    // set up
    const basket = new Basket()
    const expected = [{
      item: "cream cheese bagel",
      price: 1.20,
      quantity: 1
    }]
    // execute
    const result = basket.addToBasket("cream cheese bagel", 1.20, 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("remove an item", () => {
    // set up
    const basket = new Basket()
    basket.addToBasket("cream cheese bagel", 1.20, 1)
    basket.addToBasket("smoked salmon bagel", 1.80, 1)
    const expected = [{
      item: "cream cheese bagel",
      price: 1.20,
      quantity: 1
    }]
    // execute
    const result = basket.removeFromBasket("smoked salmon bagel", 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("error message if trying to add an item when basket is full", () => {
    // set up
    const basket = new Basket()
    basket.addToBasket("cream cheese bagel", 1.20, 3)
    basket.addToBasket("smoked salmon bagel", 1.80, 3)
    const expected = "Your basket is full, this item has not been added to your basket"
    // execute
    const result = basket.addToBasket("cream cheese bagel", 1.20, 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("has increased capacity", () => {
    // set up
    const basket = new Basket()
    const expected = 8
    // execute
    const result = basket.increaseBasketCapacity(2)
    // verify
    expect(result).toEqual(expected)
  })

  it("able to add 7th item with increased basket capacity", () => {
    // set up
    const basket = new Basket()
    basket.increaseBasketCapacity(2)
    basket.addToBasket("cream cheese bagel", 1.20, 3)
    basket.addToBasket("smoked salmon bagel", 1.80, 3)
    const expected = [{
        item: "cream cheese bagel",
        price: 1.20,
        quantity: 3
      }, {
        item: "smoked salmon bagel",
        price: 1.80,
        quantity: 3  
      }, {
        item: "bacon bagel",
        price: 1.60,
        quantity: 1    
      }]
    // execute
    const result = basket.addToBasket("bacon bagel", 1.60, 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("error message if trying to add an item when increase capacity basket is full", () => {
    // set up
    const basket = new Basket()
    basket.increaseBasketCapacity(2)
    basket.addToBasket("cream cheese bagel", 1.20, 4)
    basket.addToBasket("smoked salmon bagel", 1.80, 4)
    const expected = "Your basket is full, this item has not been added to your basket"
    // execute
    const result = basket.addToBasket("cream cheese bagel", 1.20, 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("error message if trying to remove an item when that item doesn't exist in the basket", () => {
    // set up
    const basket = new Basket()
    basket.addToBasket("cream cheese bagel", 1.20, 1)
    basket.addToBasket("smoked salmon bagel", 1.80, 1)
    const expected = "The item you're trying to remove from your basket does not exist in your basket"
    // execute
    const result = basket.removeFromBasket("bacon bagel", 1)
    // verify
    expect(result).toEqual(expected)
  })

})