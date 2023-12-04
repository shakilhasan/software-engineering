//https://codeforces.com/contest/1/problem/A
let inputString: any = "";
let currentLine = 0;
const initInput = (fn: any) => {
    process.stdin.resume();
    process.stdin.setEncoding("utf-8");
    process.stdin.on("data", (inputStdin) => {
        inputString += inputStdin;
    });
    process.stdin.on("end", () => {
        inputString = inputString.trim();
        inputString = inputString.split(" ");
        fn();
    });
};
initInput(theatreSquare);
const readLine = () => {
    return inputString[currentLine++];
};

function theatreSquare() {
    const n = parseInt(readLine()), m = parseInt(readLine()), a = parseInt(readLine());
    let row = Math.floor(n / a);
    let col = Math.floor(m / a);
    if (n % a) row++;
    if (m % a) col++;
    console.log(row * col);
}
