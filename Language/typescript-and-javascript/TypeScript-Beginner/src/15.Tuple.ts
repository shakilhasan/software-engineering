{
    //array
    let a = [3, 'hello', {p: 3}]
    a[1] = 7; // type order is not important in array
    console.log(a);
}
{
    //tuple
    let b: [number, string, object] = [4, 'hello', {t: 1}]
    // b[1]=4 //error, type order is important in tuple
}
