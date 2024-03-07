function maximum69Number (num: number): number {
    const nums:number[]=[];
    let current=num;
    while (current){
        nums.push(current%10);
        current=Math.floor(current/10);
    }
    nums.reverse();
    for(let i=0;i<nums.length;i++){
        if(nums[i]===6){
            nums[i]=9;
            return parseInt(nums.join(''), 10);
        }
    }
    return num;
}

console.log(maximum69Number(669)); //969
