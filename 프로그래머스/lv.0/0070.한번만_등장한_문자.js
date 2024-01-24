/* 
한 번만 등장한 문자

Description
문자열 s가 매개변수로 주어집니다. 
s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

제한사항
0 < s의 길이 < 1,000
s는 소문자로만 이루어져 있습니다.

입출력 예
s       	result
"abcabcadc"	"d"
"abdc"	    "abcd"
"hello" 	"eho" 
*/

// 풀이 1
// 요소 순회하며 정규표현식, match 메서드 사용하여
// 배열의 길이가 1인 요소만 필터링 후
// sort 후
// join
const solution = (s) =>
  [...s]
    .filter((e) => s.match(new RegExp(e, "g")).length === 1)
    .sort()
    .join("");

console.log(solution("abcabcadc"));

// 풀이 2
// String.prototype.lastIndexOf
// for...of문
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
