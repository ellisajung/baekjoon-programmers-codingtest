/* 
Adding Ciphers

Description
Given a natural number N as the parameter, 
write a function solution to return the sum of each digit of N.
For example, if N = 123, return 1 + 2 + 3 = 6.

Constraints
Range of N : natural number less than or equal to 100,000,000.

Examples
N	answer
123	6
987	24 
*/

const solution = (N) =>
  [...String(N)].reduce((acc, cur) => acc + Number(cur), 0);
