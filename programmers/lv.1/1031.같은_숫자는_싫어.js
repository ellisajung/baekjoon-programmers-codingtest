/* 
I Don't Like Identical Number

Description
An array arr is given. Each element of arr is a number between 0 through 9. 
You want to remove all the duplicate numbers in the array arr except for only one.
However, the order of each element in the array arr should be maintained. For example,

When arr = [1, 1, 3, 3, 0, 1, 1], return [1, 3, 0, 1].
When arr = [4, 4, 4, 3, 3], return [4, 3].
Write a function solution to return the remaining numbers after removing the duplicate numbers in the array arr except only one.

Constraints
Length of array arr : natural number less than or equal to 1,000,000.
Element of array arr : integer between 0 and 9.

Examples
arr         	    answer
[1,1,3,3,0,1,1]	    [1,3,0,1]
[4,4,4,3,3]	        [4,3] 
*/

// 풀이 1
const solution = (arr) => {
  const answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};

// 풀이 2
const solution = (arr) => arr.filter((v, i) => v !== arr[i + 1]);
