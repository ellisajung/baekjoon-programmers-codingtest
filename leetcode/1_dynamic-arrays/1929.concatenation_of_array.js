/* 
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
 */

const getConcatenation = (nums) => [...nums, ...nums];

console.log(getConcatenation([1, 3, 2, 1]));

/* 
Notes

1. Array.prototype.concat()
2. 스프레드 연산자
*/
