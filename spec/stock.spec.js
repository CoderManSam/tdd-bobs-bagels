const Stock = require("../src/stock.js")

describe("Stock", () => {
  it("price of an item before being added to a basket", () => {
    // set up
    const stock = new Stock()
    const expected = {
      sku: "BGLO",
      price: 0.49
    }
    // execute
    const result = stock.getPrice(expected.sku)
    // verify
    expect(result).toEqual(expected.price)
  })

})