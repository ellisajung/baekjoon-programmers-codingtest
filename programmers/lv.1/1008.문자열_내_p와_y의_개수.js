/* 
The Number of p and y in String

Description
Suppose that a string s consisting of both lower-case and upper-case letters are given. 
Write a function "solution" to return True when the number of 'p' and 'y' in s are the same, 
and return False otherwise. Note that when there is neither 'p' nor 'y', 
it should always return True. Also, when comparing the number of 'p' and 'y', 
lower-case and upper-case are not distinguished.

For example, if s is "pPoooyY", then return true. In the case of "Pyy", return false.

Constraints
Length of string s : natural number less than 50.
String s consists of letters only.

Examples
s       	answer
"pPoooyY"	true
"Pyy"	    false 
*/

// 풀이 1
const solution = (s) => {
  const countP = s.match(/p/gi)?.length ?? 0;
  const countY = s.match(/y/gi)?.length ?? 0;
  return countP === countY ? true : false;
};

console.log([].length); // 0
console.log("pPooo".match(/y/gi)); // null **빈 배열 아님 주의**
