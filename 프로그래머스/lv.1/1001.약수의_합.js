/* 
약수의 합

Description
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.

입출력 예
n	return
12	28
5	6 
*/

// 풀이 1
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) answer += i;
  }
  return answer;
};

// 풀이 2
// 제곱근 범위까지 찾으면서
// i와 n/i를 더해줌
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n ** 0.5; i++) {
    if (!(n % i)) i ** 2 === n ? (answer += i) : (answer += i + n / i);
  }
  return answer;
};

console.log(solution(4));
