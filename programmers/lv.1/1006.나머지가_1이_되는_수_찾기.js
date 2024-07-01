/* 
나머지가 1이 되는 수 찾기

Description
자연수 n이 매개변수로 주어집니다. 
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 
답이 항상 존재함은 증명될 수 있습니다.

제한사항
3 ≤ n ≤ 1,000,000

입출력 예
n	result
10	3
12	11 
*/

// 풀이 1
// n이 홀수 - 항상 2 반환
// n이 짝수 - (n-1)의 약수 중 1을 제외한 가장 작은 약수
// 굳이 나눌 필요 없음...
const solution = (n) => {
  if (!!(n % 2)) return 2;
  for (let i = 3; i <= n; i++) {
    if (n % i === 1) return i;
  }
};
console.log(solution(12));

// 풀이 2
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

/* 
불리언 타입으로 명시적 변환 

console.log(!!1); // true
console.log(!!0); // false
console.log(!!2); // true *주의*
*/
