function intToRoman(num: number): string { //: { [key: number]: string }
    const obj: any = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    };
    const keys = Object.keys(obj).reverse();
    let [i, count] = [0, 0], result = '';
    for (i; i < keys.length; i++) {
        count = Math.floor(num / Number(keys[i]));
        if (count) result += new Array(count + 1).join(obj[keys[i]]);
        num %= Number(keys[i]);
    }
    return result;
}

console.log(intToRoman(1994));
