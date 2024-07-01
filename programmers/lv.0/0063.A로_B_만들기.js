/* 
A로 B 만들기

Description
문자열 before와 after가 매개변수로 주어질 때, 
before의 순서를 바꾸어 after를 만들 수 있으면 1을, 
만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < before의 길이 == after의 길이 < 1,000
before와 after는 모두 소문자로 이루어져 있습니다.

입출력 예
before	after	result
"olleh"	"hello"	1
"allpe"	"apple"	0 
*/

// 풀이 1 오답
// Array.prototype.sort()
// === 일치 비교 연산자 (strict equality) - *원시 타입*의 경우 값과 타입이 같아야, *참조 타입*의 경우 참조값이 같아야 true 반환
const solution = (before, after) =>
  [...before].sort() === [...after].sort() ? 1 : 0;

console.log([..."olleh"].sort()); // [ 'e', 'h', 'l', 'l', 'o' ]
console.log([..."hello"].sort()); // [ 'e', 'h', 'l', 'l', 'o' ]
console.log([..."olleh"].sort() === [..."hello"].sort()); // false
console.log(solution("olleh", "hello")); // 0

// 풀이 1 오답 정정
const solution = (before, after) =>
  [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
