//https://leetcode.com/problems/insert-delete-getrandom-o1/description
class RandomizedSet {
    constructor(public obj: any = {}) {
    }

    insert(val: number): boolean {
        if (this.obj[val]) return false
        else this.obj[val] = true
        return true;
    }

    remove(val: number): boolean {
        if (!this.obj[val]) return false
        else delete this.obj[val]
        return true
    }

    getRandom(): number {
        return Number(Object.keys(this.obj)[Math.floor(Math.random()*Object.keys(this.obj).length)])
    }
}

const obj = new RandomizedSet();
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.getRandom())

