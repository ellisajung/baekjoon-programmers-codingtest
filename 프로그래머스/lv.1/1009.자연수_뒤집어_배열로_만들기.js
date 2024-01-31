/* 
자연수 뒤집어 배열로 만들기

Description
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.

입출력 예
n   	return
12345	[5,4,3,2,1] 
*/

// 풀이 1
const solution = (n) => [...String(n)].reverse().map((e) => Number(e));

// 풀이 2
function solution(n) {
  const arr = [];
  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return arr;
}
