class Basket {
    constructor () {
        this.items = []
        this.maxCapacity = 6
    }

    addToBasket(itemName, itemPrice, itemQuantity) {

        // NEED TO ADD LOGIC FOR IF ADDING TO QUANTITY OF EXISTING ITEM NOT A WHOLE NEW ITEM
        // need to add tests for undefined/null

        const basketItem = {
            item: itemName,
            price: itemPrice,
            quantity: itemQuantity
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

}

module.exports = Basket