const Basket = require("../src/basket.js")

describe("Basket", () => {
  it("add an item", () => {
    // set up
    const basket = new Basket()
    const expected = [{
      item: "cream cheese bagel",
      price: 1.20,
      quantity: 1,
      quantityForSum: 1
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
      quantity: 1,
      quantityForSum: 1
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
        quantity: 3,
        quantityForSum: 3
      }, {
        item: "smoked salmon bagel",
        price: 1.80,
        quantity: 3,
        quantityForSum: 3
      }, {
        item: "bacon bagel",
        price: 1.60,
        quantity: 1,
        quantityForSum: 1    
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

  it("adds to the quantity of an item already in the basket", () => {
    // set up
    const basket = new Basket()
    basket.addToBasket("cream cheese bagel", 1.20, 1)
    const expected = [{
      item: "cream cheese bagel",
      price: 1.20,
      quantity: 2,
      quantityForSum: 2
    }]
    // execute
    const result = basket.addToItemQuantity("cream cheese bagel", 1)
    // verify
    expect(result).toEqual(expected)
  })

  it("displays total sum at checkout", () => {
    // set up
    const basket = new Basket()
    basket.addToBasket("cream cheese bagel", 1.20, 1)
    basket.addToBasket("smoked salmon bagel", 1.80, 2)
    const expected = 4.80
    // execute
    const result = basket.checkoutTotalSum()
    // verify
    expect(result).toEqual(expected)
  })

  it("creates a large order utilising special offers, provides checkout sum", () => {
    // set up
    const basket = new Basket()
    basket.increaseBasketCapacity(20)
    basket.addToBasket("onion bagel", 0.49, 2)
    basket.addToBasket("coffee", 0.99, 3)
    basket.plainSpecial(1)
    basket.everythingSpecial(1)
    const expected = 10.43
    // execute
    const result = basket.checkoutTotalSum()
    // verify
    expect(result).toEqual(expected)
  })

  it("creates a different large order utilising special offers, provides checkout sum", () => {
    // set up
    const basket = new Basket()
    basket.increaseBasketCapacity(20)
    basket.addToBasket("plain bagel", 0.39, 4)
    basket.plainSpecial(1)
    const expected = 5.55
    // execute
    const result = basket.checkoutTotalSum()
    // verify
    expect(result).toEqual(expected)
  })

    // HAVEN'T WRITTEN A TEST FOR THE RECEIPT METHOD AS THE DATETIME PART WILL CONSTANTLY BE CHANGING
    // ALSO UNSURE HOW TO WRITE AN EXPECTED VALUE THAT'LL MATCH THE RESULT
    // METHOD DOES CREATE AN ACCURATE RECEIPT WHEN USING CONSOLE LOG AND NODE IN SRC FILE

})