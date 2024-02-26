function decimalToBinary(decimalNumber: number): number {
    return Number((decimalNumber >>> 0).toString(2));
}

export {
    decimalToBinary
}
