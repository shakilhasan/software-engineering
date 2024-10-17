import { isAnagram, isAnagram1 } from "./242.Valid Anagram";

test('isAnagram',()=>{
    expect(isAnagram("ab","ba")).toBeTruthy();
    expect(isAnagram("anagram","nagaram")).toBeTruthy();
    expect(isAnagram("rat","car")).toBeFalsy();
});
test('isAnagram1',()=>{
    expect(isAnagram1("ab","ba")).toBeTruthy();
    expect(isAnagram1("anagram","nagaram")).toBeTruthy();
    expect(isAnagram1("rat","car")).toBeFalsy();
});
