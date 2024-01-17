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
// const solution = (n) => {
//   const divisors = [];
//   for (let i = 0; i <= n; i++) {
//     if (n % i === 0) divisors.push(i);
//   }
//   //   console.log(divisors);
//   return divisors.length;
// };
// // console.log(solution(20));

// 풀이 2
const solution = (n) => {
  const divisors = [];
  for (let i = 0; i <= Math.ceil(n ** 0.5); i++) {
    if (n % i === 0) divisors.push(i);
  }
  console.log(divisors);

  return divisors.length % 2
    ? divisors.length * 2 - 1
    : (divisors.length - 1) * 2;
};
console.log(solution(20));
console.log(solution(100));
