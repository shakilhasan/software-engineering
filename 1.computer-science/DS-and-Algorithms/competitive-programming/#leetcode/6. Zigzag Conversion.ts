function convert(s: string, numRows: number): string {
    let i = 0, mod = 0, divisor = (numRows - 1) * 2, rows = new Array(numRows).fill('');
    if(numRows<2) return s;
    for (i = 0; i < s.length; i++) {
        mod = i % divisor;
        rows[mod < numRows ? mod : divisor - mod] += s[i];
    }
    return rows.join('');
}

console.log(convert("PAYPALISHIRING", 3))
