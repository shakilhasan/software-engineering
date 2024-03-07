import {lemonadeChange} from "./860.Lemonade Change";

test('lemonadeChange', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBeTruthy();
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBeFalsy();
    expect(lemonadeChange([5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5])).toBeTruthy();
    expect(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5])).toBeFalsy(); //48 no case
})
