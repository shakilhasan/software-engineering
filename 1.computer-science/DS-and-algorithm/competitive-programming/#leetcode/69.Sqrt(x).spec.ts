import { mySqrt } from './69.Sqrt(x)';

test('mySqrt function',()=>{
   expect(mySqrt(4)).toEqual(2);
   expect(mySqrt(8)).toEqual(2);
   expect(mySqrt(1)).toEqual(1);
   expect(mySqrt(1660267039)).toEqual(40746);
});
