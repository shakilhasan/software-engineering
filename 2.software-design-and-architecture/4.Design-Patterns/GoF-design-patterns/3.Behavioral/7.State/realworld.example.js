"use strict";
class VendingMachineContext {
    state;
    credit = 0;
    inventory = INITIAL_INVENTORY;
    constructor(state) {
        this.transitionTo(state);
    }
    addCredit(credit) {
        this.credit += credit;
        console.log(`Credit is now ${this.credit}`);
    }
    resetCredit() {
        this.credit = 0;
        console.log('Credit has been reset');
    }
    hasStockOf(product) {
        return this.inventory.items.some(i => i.product.name === product.name && i.items > 0);
    }
    isOutOfStock() {
        return !this.inventory.items.some(i => i.items > 0);
    }
    dispenseProduct(product) {
        if (product.value > this.credit)
            throw new Error(`You are trying to buy a product with price ${product.value} but your credit is only ${this.credit}`);
        if (!this.hasStockOf(product))
            throw new Error(`No ${product.name} products left, select another one`);
        const inventoryItem = this.inventory.items.find(i => i.product.name === product.name);
        let newInventoryItem = {};
        if (inventoryItem) {
            newInventoryItem = {
                product,
                items: inventoryItem.items - 1,
            };
        }
        const restOfInventory = this.inventory.items.filter(i => i.product.name !== product.name);
        this.inventory.items = [...restOfInventory, newInventoryItem];
        console.log(`Product ${product.name} dispensed. Inventory is now:`, this.inventory.items);
        this.resetCredit();
    }
    transitionTo(state) {
        console.log(`Context: Transition to ${state.constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    insertCoin(coin) {
        this.state.insertCoin(coin);
    }
    selectProduct(product) {
        this.state.selectProduct(product);
    }
}
class State1 {
    context;
    setContext(context) {
        this.context = context;
    }
}
class InitialReadyState extends State1 {
    insertCoin(coin) {
        this.context.addCredit(coin.value);
        this.context.transitionTo(new TransactionStarted());
    }
    selectProduct(_) {
        throw new Error('You should insert coins before selecting the product');
    }
}
class TransactionStarted extends State1 {
    insertCoin(coin) {
        this.context.addCredit(coin.value);
    }
    selectProduct(product) {
        this.context.dispenseProduct(product);
        if (this.context.isOutOfStock())
            this.context.transitionTo(new OutOfStock());
        else
            this.context.transitionTo(new InitialReadyState());
    }
}
class OutOfStock extends State1 {
    insertCoin(_) {
        throw new Error('Stop inserting coins, we completely run out of stock');
    }
    selectProduct(_) {
        throw new Error('Stop selecting products, we completely run of stock');
    }
}
const SODA = {
    name: 'Soda',
    value: 15,
};
const NUTS = {
    name: 'Nuts',
    value: 25,
};
const INITIAL_INVENTORY = {
    items: [
        { product: SODA, items: 2 },
        { product: NUTS, items: 0 },
    ],
};
const NICKEL = { name: 'nickel', value: 5 };
const DIME = { name: 'dime', value: 10 };
//client code
const context = new VendingMachineContext(new InitialReadyState());
const handleError = (error) => {
    console.error(error.message);
};
try {
    context.selectProduct(NUTS);
}
catch (error) {
    handleError(error);
}
context.insertCoin(DIME);
try {
    context.selectProduct(SODA);
}
catch (error) {
    handleError(error);
}
context.insertCoin(NICKEL);
context.selectProduct(SODA);
context.insertCoin(DIME);
context.insertCoin(NICKEL);
try {
    context.selectProduct(SODA);
}
catch (error) {
    handleError(error);
}
try {
    context.insertCoin(NICKEL);
}
catch (error) {
    handleError(error);
}
