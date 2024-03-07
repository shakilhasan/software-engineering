//Ternary Operator
{
    let age = 20;

    //normal
    let type;
    if (age >= 14) {
        type = 'old'
    } else {
        type = 'child'
    }

    //using Ternary Operator
    let type1 = age >= 14 ? 'old' : 'child';

    //can farther nested Ternary, but more than 2 level nested can more complex
    let type2 = age >= 14 ? 'old' : age >= 6 ? 'young' : 'child';


}