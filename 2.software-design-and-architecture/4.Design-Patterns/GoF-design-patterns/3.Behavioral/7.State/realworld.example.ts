interface Coin {
    name: string;
    value: number;
}

interface Product {
    name: string;
    value: number;
}

interface InventoryItem {
    product: Product;
    items: number;
}

interface Inventory {
    items: InventoryItem[];
}

class VendingMachineContext {
    private state: State1;
    private credit: number = 0;
    private inventory: Inventory = INITIAL_INVENTORY;

    constructor(state: State1) {
        this.state = state;
        this.transitionTo(state);
    }

    public addCredit(credit: number) {
        this.credit += credit;
        console.log(`Credit is now ${this.credit}`);
    }

    public resetCredit() {
        this.credit = 0;
        console.log('Credit has been reset');
    }

    public hasStockOf(product: Product): boolean {
        return this.inventory.items.some(i => i.product.name === product.name && i.items > 0);
    }

    public isOutOfStock(): boolean {
        return !this.inventory.items.some(i => i.items > 0);
    }

    public dispenseProduct(product: Product) {
        if (product.value > this.credit) throw new Error(`You are trying to buy a product with price ${product.value} but your credit is only ${this.credit}`);
        if (!this.hasStockOf(product)) throw new Error(`No ${product.name} products left, select another one`);

        const inventoryItem = this.inventory.items.find(i => i.product.name === product.name);
        let newInventoryItem: any = {};
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

    public transitionTo(state: State1): void {
        console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public insertCoin(coin: Coin): void {
        this.state.insertCoin(coin);
    }

    public selectProduct(product: Product): void {
        this.state.selectProduct(product);
    }
}

abstract class State1 {
    protected context: VendingMachineContext;

    public setContext(context: VendingMachineContext) {
        this.context = context;
    }

    public abstract insertCoin(coin: Coin): void;

    public abstract selectProduct(product: Product): void;
}

class InitialReadyState extends State1 {
    public insertCoin(coin: Coin): void {
        this.context.addCredit(coin.value);
        this.context.transitionTo(new TransactionStarted());
    }

    public selectProduct(_: Product): void {
        throw new Error('You should insert coins before selecting the product');
    }
}

class TransactionStarted extends State1 {
    public insertCoin(coin: Coin): void {
        this.context.addCredit(coin.value);
    }

    public selectProduct(product: Product): void {
        this.context.dispenseProduct(product);

        if (this.context.isOutOfStock()) this.context.transitionTo(new OutOfStock());
        else this.context.transitionTo(new InitialReadyState());
    }
}

class OutOfStock extends State1 {
    public insertCoin(_: Coin): void {
        throw new Error('Stop inserting coins, we completely run out of stock');
    }

    public selectProduct(_: Product): void {
        throw new Error('Stop selecting products, we completely run of stock');
    }
}

const SODA: Product = {
    name: 'Soda',
    value: 15,
};
const NUTS: Product = {
    name: 'Nuts',
    value: 25,
};

const INITIAL_INVENTORY: Inventory = {
    items: [
        {product: SODA, items: 2},
        {product: NUTS, items: 0},
    ],
};

const NICKEL = {name: 'nickel', value: 5};
const DIME = {name: 'dime', value: 10};

//client code
const context = new VendingMachineContext(new InitialReadyState());

const handleError = (error) => {
    console.error(error.message);
};

try {
    context.selectProduct(NUTS);
} catch (error) {
    handleError(error);
}
context.insertCoin(DIME);
try {
    context.selectProduct(SODA);
} catch (error) {
    handleError(error);
}
context.insertCoin(NICKEL);
context.selectProduct(SODA);

context.insertCoin(DIME);
context.insertCoin(NICKEL);
try {
    context.selectProduct(SODA);
} catch (error) {
    handleError(error);
}
try {
    context.insertCoin(NICKEL);
} catch (error) {
    handleError(error);
}
