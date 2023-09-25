interface CanWalk {
    walk(): void;
}

interface CanFly {
    fly(): void;
}

class Nightingale_1 implements CanFly, CanWalk {
    public fly() {
        /// ...
    }
    public walk() {
        /// ...
    }
}

class Kiwi_1 implements CanWalk {
    public walk() {
        /// ...
    }
}
