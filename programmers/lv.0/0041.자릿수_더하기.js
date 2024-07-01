/* 
자릿수 더하기

Description
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 
return하도록 solution 함수를 완성해주세요

제한사항
0 ≤ n ≤ 1,000,000

입출력 예
n   	result
1234	10
930211	16 
*/

// 풀이 1
// 문자열로 명시적 타입 변환
// (1) String()
// (2) Number.prototype.toString()

// 문자열 요소 합 구하기 - for문
const solution = (n) => {
  const str = String(n);
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }
  return answer;
};

// 풀이 2
// 배열 요소 합 구하기 - Array.prototype.reduce()
const solution = (n) =>
  String(n)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
