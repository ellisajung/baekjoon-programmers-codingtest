/* 
소인수분해

Description
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 
예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 
따라서 12의 소인수는 2와 3입니다. 
자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 
return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ n ≤ 10,000

입출력 예
n	result
12	[2, 3]
17	[17]
420	[2, 3, 5, 7] 
*/

// 풀이 1
function solution(n) {
  const answer = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      answer.push(i);
      n = n / i;
    }
  }
  return [...new Set(answer)];
}

// // 풀이 1-1 최적화 "오답"
// function solution(n) {
//   const answer = [];
//   for (let i = 2; i <= n ** 0.5; i++) {
//     while (n % i === 0) {
//       answer.push(i);
//       n = n / i;
//       console.log(n);
//     }
//   }
//   console.log(n);
//   console.log(answer);
//   if (n > 2) answer.push(n);
//   return [...new Set(answer)];
// }
// console.log(solution(2));

// 풀이 1-2 최적화
const solution = (n) => {
  const primes = [];
  while (n % 2 === 0) {
    primes.push(2);
    n = n / 2;
  }
  for (let i = 3; i <= n ** 0.5; i = i + 2) {
    while (n % i === 0) {
      primes.push(i);
      n = n / i;
    }
  }
  if (n > 2) {
    primes.push(n);
  }

  return [...new Set(primes)];
};
