/* 
유한소수 판별하기

Description
소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 
분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 
유한소수가 되기 위한 분수의 조건은 다음과 같습니다.

기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 
무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
a, b는 정수
0 < a ≤ 1,000
0 < b ≤ 1,000

입출력 예
a	b	result
7	20	1
11	22	1
12	21	2 
*/

// '0074.소인수분해' 참고

// 풀이 1
// 기약분수 - 분자 분모의 공약수가 없을 때까지 공약수로 나누기
// 이때 분모의 소인수가 2,5 만 존재
const solution = (a, b) => {
  const aPrimes = [];
  const bPrimes = [];
  // 소인수분해
  for (let i = 2; i <= a; i++) {
    while (a % i === 0) {
      aPrimes.push(i);
      a /= i;
    }
  }
  for (let i = 2; i <= b; i++) {
    while (b % i === 0) {
      bPrimes.push(i);
      b /= i;
    }
  }
  console.log(aPrimes, bPrimes);
  // 약분
  aPrimes.forEach((e) => delete bPrimes[bPrimes.indexOf(e)]);
  return /[^25]/g.test(bPrimes.join("")) ? 2 : 1;
};

console.log("" + [1, 2, 3]); // 1, 2, 3
console.log(solution(7, 20));
// 정규표현식 뽀개고 가자... 맨날 헷갈리네

// 풀이 2
// a와 b의 최대공약수를 구한 후
// 최대공약수로 약분 -> 기약분수
// b를 2와 5로 나누어지면 1 반환, 그렇지 않으면 2 반환
function solution(a, b) {
  let n = 1;
  // 최대공약수 구하기
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }
  // 최대공약수로 약분
  b /= n;
  // 2, 5로 나눌 수 있는 만큼 나누기
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b ? 1 : 2;
}
