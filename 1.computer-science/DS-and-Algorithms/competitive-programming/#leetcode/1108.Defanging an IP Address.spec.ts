import { defangIPaddr } from './1108.Defanging an IP Address';

test('defangIPaddr',()=>{
    expect(defangIPaddr("1.1.1.1")).toEqual("1[.]1[.]1[.]1");
    expect(defangIPaddr("255.100.50.0")).toEqual("255[.]100[.]50[.]0");
});
