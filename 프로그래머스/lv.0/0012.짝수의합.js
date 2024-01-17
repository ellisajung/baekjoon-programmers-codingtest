/* 
짝수의 합

Description
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

제한사항
0 < n ≤ 1000

입출력 예
n	result
10	30
4	6 
*/

// 풀이 1
// 첫째항이 2이고, 공차가 2인 등차수열의 k=1부터 k=n까지의 합
// ∑2k = n(n+1) = n**2 + n
// n === 주어진 정수의 몫
const solution = (n) => Math.floor(n / 2) ** 2 + Math.floor(n / 2);

// 풀이 2
// for문 사용
function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }

  return answer;
}
