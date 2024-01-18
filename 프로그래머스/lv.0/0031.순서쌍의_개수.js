/* 
순서쌍의 개수

Description
순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 
자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 
return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 1,000,000

입출력 예
n	    result
20	    6
100	    9 
*/

// 풀이 1
const solution = (n) => {
  const divisors = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisors.push(i);
  }
  return divisors.length;
};

// 풀이 2
const solution = (n) => {
  let divisors = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisors++;
  }
  return divisors;
};

// 풀이 3
// 제곱근 활용하여 시간복잡도 개선
const solution = (n) => {
  let divisors = 0;
  for (let i = 0; i < n ** 0.5; i++) {
    if (n % i === 0) divisors++;
  }
  divisors = divisors * 2;
  if (Number.isInteger(n ** 0.5)) divisors++;

  return divisors;
};

// 풀이 4
// 풀이 3 최적화
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) ans += 2;
  }

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}
