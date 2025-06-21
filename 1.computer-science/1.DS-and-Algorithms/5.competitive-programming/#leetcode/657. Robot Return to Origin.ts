//https://leetcode.com/problems/robot-return-to-origin
function judgeCircle(moves: string): boolean {
    let x = 0, y = 0;
    for (const move of moves) {
        if (move === 'R') x++;
        else if (move === 'L') x--;
        else if (move === 'U') y++;
        else if (move === 'D') y--;
    }
    return !x && !y;
}

console.log(judgeCircle("UD")) //true
console.log(judgeCircle("LL")) //false
console.log(judgeCircle("RRDD")) //false
