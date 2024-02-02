/* 
약수의 개수와 덧셈

Description
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000

입출력 예
left	right	result
13	    17	    43
24	    27	    52 
*/

// 풀이 1
// 약수의 개수 - 제곱수일 경우 홀수
const solution = (left, right) =>
  Array.from({ length: right - left + 1 }, (_, i) => i + left).reduce(
    (acc, cur) => (Number.isInteger(cur ** 0.5) ? acc - cur : acc + cur),
    0
  );

// 풀이 2
const solution = (left, right) => {
  let answer = 0;
  for (let i = left; i <= right; i++)
    Number.isInteger(i ** 0.5) ? (answer -= i) : (answer += i);
  return answer;
};
