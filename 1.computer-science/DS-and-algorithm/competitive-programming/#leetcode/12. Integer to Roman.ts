function intToRoman(num: number): string { //: { [key: number]: string }
    const obj:any = {
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

    const keys = Object.keys(obj);
    let result='';

    for (let i = 0; i < keys.length; i++) {
        let count=Math.ceil(num / Number(obj[i]));
        if (count) {
            result+=obj[keys[i]];
        }
    }

    return result;
}

console.log(intToRoman(555));
