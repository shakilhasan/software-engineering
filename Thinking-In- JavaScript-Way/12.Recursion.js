//  images/Recursion.png
function sum(n){
    if(n===0){
        return 0;
    }else{
        return sum(n-1)+n;
    }
}

console.log(sum(10))