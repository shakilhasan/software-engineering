//https://leetcode.com/problems/baseball-game
function calPoints(operations: string[]): number {
    const list:number[]=[];
    let total:number = 0;
    for(let i=0;i<operations.length;i++) {
        let len:number = list.length;
        if(operations[i] === '+') list.push(Number(list[len - 1]) + Number(list[len - 2]))
        else if(operations[i] === 'D') list.push(list[len -1]*2)
        else if(operations[i] === 'C') list.pop();
        else list.push(Number(operations[i]));
    }
    for(let i=0;i<list.length;i++) total += list[i];
    return total;
}
console.log(calPoints(["5","2","C","D","+"])) //30
console.log(calPoints(["5","-2","4","C","D","9","+","+"])) //27
console.log(calPoints(["1","C"])) //0
