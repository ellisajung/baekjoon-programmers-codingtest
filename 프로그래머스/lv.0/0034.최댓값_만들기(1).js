/* 
최댓값 만들기 (1)

Description
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100

입출력 예
numbers	                result
[1, 2, 3, 4, 5]	        20
[0, 31, 24, 10, 1, 9]	744 
*/

// 풀이 1
// 자바스크립트 마이너스 인덱스 없음 주의
const solution = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] * numbers[numbers.length - 2];
};

// 풀이 2
const solution = (numbers) => {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
};

// 풀이 3
// 배열 디스트럭처링 할당 사용
const solution = (numbers) => {
  let [a, b] = numbers.sort((a, b) => b - a);
  return a * b;
};
