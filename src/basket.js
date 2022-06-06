const Inventory = require('../inventory.json').inventory

class Basket {
    constructor () {
        this.items = []
        this.maxCapacity = 6
    }

    addToBasket(itemName, itemPrice, itemQuantity) {

        // need to add tests for undefined/null

        const basketItem = {
            item: itemName,
            price: itemPrice,
            quantity: itemQuantity,
            quantityForSum: itemQuantity
        }

        let basketQuantity = 0
        
        for (let i = 0; i < this.items.length; i++) {

             basketQuantity += this.items[i].quantity

        }

        if ((basketQuantity + basketItem.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        this.items.push(basketItem)


        return this.items
    }

    removeFromBasket(itemName, quantityToRemove) {

        const index = this.items.findIndex(item => item.item === itemName)
        const itemToRemove = this.items[index]

        if (index === -1) {

            return "The item you're trying to remove from your basket does not exist in your basket"
        }

        itemToRemove.quantity -= quantityToRemove

        if (itemToRemove.quantity === 0) {

            this.items.splice(index, 1)

        }

        return this.items
    }

    increaseBasketCapacity(increaseCapacityBy) {

        this.maxCapacity += increaseCapacityBy

        return this.maxCapacity
    }

    addToItemQuantity(itemName, itemQuantity) {

        // need to add tests for undefined/null

        const itemToIncreaseQuantity = this.items.find(item => item.item === itemName)

        itemToIncreaseQuantity.quantity += itemQuantity
        itemToIncreaseQuantity.quantityForSum += itemQuantity

        if ((itemToIncreaseQuantity.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        return this.items
    }

    checkoutTotalSum() {

        let totalSum = 0

        for(let i = 0; i < this.items.length; i++) {

            totalSum += (this.items[i].quantityForSum*this.items[i].price)

        }

        const rounded = Math.round((totalSum + Number.EPSILON) * 100) / 100;

        return rounded
    }

    onionSpecial(quantityOfSpecial) {

        // need to add tests for undefined/null

        const basketItem = {
            item: "Deal: onion bagels, 6 for 2.49",
            price: 2.49*quantityOfSpecial,
            quantity: 6*quantityOfSpecial,
            quantityForSum: quantityOfSpecial
        }

        let basketQuantity = 0
        
        for (let i = 0; i < this.items.length; i++) {

             basketQuantity += this.items[i].quantity

        }

        if ((basketQuantity + basketItem.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        this.items.push(basketItem)


        return this.items
    }

    plainSpecial(quantityOfSpecial) {

        // need to add tests for undefined/null

        const basketItem = {
            item: "Deal: plain bagels, 12 for 3.99",
            price: 3.99*quantityOfSpecial,
            quantity: 12*quantityOfSpecial,
            quantityForSum: quantityOfSpecial
        }

        let basketQuantity = 0
        
        for (let i = 0; i < this.items.length; i++) {

             basketQuantity += this.items[i].quantity

        }

        if ((basketQuantity + basketItem.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        this.items.push(basketItem)


        return this.items
    }

    everythingSpecial(quantityOfSpecial) {

        // need to add tests for undefined/null

        const basketItem = {
            item: "Deal: everything bagels, 6 for 2.49",
            price: 2.49*quantityOfSpecial,
            quantity: 6*quantityOfSpecial,
            quantityForSum: quantityOfSpecial
        }

        let basketQuantity = 0
        
        for (let i = 0; i < this.items.length; i++) {

             basketQuantity += this.items[i].quantity

        }

        if ((basketQuantity + basketItem.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        this.items.push(basketItem)


        return this.items
    }

    coffeeAndPlainSpecial(quantityOfSpecial) {

        // need to add tests for undefined/null

        const basketItem = {
            item: "Deal: coffee and a plain bagel for 1.25",
            price: 1.25*quantityOfSpecial,
            quantity: 2*quantityOfSpecial,
            quantityForSum: quantityOfSpecial
        }

        let basketQuantity = 0
        
        for (let i = 0; i < this.items.length; i++) {

             basketQuantity += this.items[i].quantity

        }

        if ((basketQuantity + basketItem.quantity) > this.maxCapacity) {

            return "Your basket is full, this item has not been added to your basket"

        }

        this.items.push(basketItem)


        return this.items
    }

}

module.exports = Basket