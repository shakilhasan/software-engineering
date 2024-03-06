// export function mySqrt(x: number): number {
//     let guess: number = Math.ceil(x / 2);
//     while (guess) {
//         if(guess*guess>x) guess--;
//         else break;
//     }
//     return guess;
// }
//TODO: this solution is not acceptable
export function mySqrt(x: number): number {
    return Math.floor(Math.sqrt(x));
}
