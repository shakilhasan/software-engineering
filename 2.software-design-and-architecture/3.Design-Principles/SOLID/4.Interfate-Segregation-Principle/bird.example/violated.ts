interface Bird {
    fly(): void;
    walk(): void;
}
class Nightingale implements Bird {
    public fly() {
        /// ...
    }
    public walk() {
        /// ...
    }
}
class Kiwi implements Bird {
    public fly() {
        throw new Error('Unfortunately, Kiwi can not fly!');
    }
    public walk() {
        /// ...
    }
}
