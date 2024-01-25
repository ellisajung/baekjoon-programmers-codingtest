/* 
외계어 사전

Description
PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 
존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
2 ≤ spell의 크기 ≤ 10
spell의 원소의 길이는 1입니다.
1 ≤ dic의 크기 ≤ 10
1 ≤ dic의 원소의 길이 ≤ 10
spell의 원소를 모두 사용해 단어를 만들어야 합니다.
spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
dic과 spell 모두 중복된 원소를 갖지 않습니다.

입출력 예
spell               	dic                                 	    result
["p", "o", "s"]	        ["sod", "eocd", "qixm", "adio", "soo"]	    2
["z", "d", "x"]	        ["def", "dww", "dzx", "loveaw"]	            1
["s", "o", "m", "d"]	["moos", "dzx", "smm", "sunmmo", "som"]	    2 
*/

// // 풀이 1 "오답"
// // Array.prototype.find
// // 배열을 순회하며 인수로 전달된 콜백 함수를 호출하여,
// // 반환값이 true인 첫번째 요소 반환. 없으면 undefined 반환
// const solution = (spell, dic) =>
//   !!dic.find((e) => e.match(new RegExp(`[${spell.join("")}]+`, "g"))) ? 1 : 2;
// // console.log(!!undefined);
// // console.log(/[zdx]+/g.test("dzx"));

// Test 1
// Input 〉	["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]
// Expected 〉	2
// Result 〉	실행한 결괏값 1이 기댓값 2과 다릅니다.
// Test 2
// Input 〉	["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]
// Expected 〉	1
// Result 〉	테스트를 통과하였습니다.
// Test 3
// Input 〉	["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]
// Expected 〉	2
// Result 〉	실행한 결괏값 1이 기댓값 2과 다릅니다.

// 풀이 2
// dic의 각 요소 순회하며
// 정렬한 배열로 변환
// 정렬한 spell과 일치 여부 검사 - 참조 타입 일치 비교할 때 주의!!! 원시값으로 바꾸어 비교할 것
const solution = (spell, dic) =>
  dic.find((e) => [...e].sort().join("") === spell.sort().join("")) ? 1 : 2;

console.log(["z", "d", "x"].sort() === [..."dzx"].sort()); // false
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));

console.log(undefined ? 1 : 2); // 2
