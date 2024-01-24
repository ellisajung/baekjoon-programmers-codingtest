/* 
팩토리얼

Description
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

i! ≤ n
제한사항
0 < n ≤ 3,628,800

입출력 예
n   	    result
3628800	    10
7	        3 
*/

// 풀이 1
// 팩토리얼 함수 구현 후
// n과 비교
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const solution = (n) => {
  let i = 1;
  while (factorial(i) <= n) {
    i++;
  }
  return i - 1;
};

console.log(factorial(3));
console.log(solution(7));
