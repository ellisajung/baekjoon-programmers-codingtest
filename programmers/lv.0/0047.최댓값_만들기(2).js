/* 
최댓값 만들기 (2)

Description
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers 의 길이 ≤ 100

입출력 예
numbers             	    result
[1, 2, -3, 4, -5]	        15
[0, -31, 24, 10, 1, 9]	    240
[10, 20, 30, 5, 5, 20, 5]	600
*/

// 풀이 1
const solution = (numbers) => {
  const [a, b] = numbers.sort((a, b) => a - b);
  const [c, d] = numbers.sort((a, b) => b - a);
  //   console.log(numbers.sort((a, b) => a - b));
  return a * b > c * d ? a * b : c * d;
};
// console.log(solution([1, 2, -3, 4, -5]));

// 풀이 2
// Math.max() 사용
// 전달된 인수 중 가장 큰 수 반환
const solution = (numbers) => {
  const [a, b] = numbers.sort((a, b) => a - b);
  const [c, d] = numbers.sort((a, b) => b - a);
  //   console.log(numbers.sort((a, b) => a - b));
  return Math.max(a * b, c * d);
};

// 풀이 3
const solution = (numbers) => {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
};
