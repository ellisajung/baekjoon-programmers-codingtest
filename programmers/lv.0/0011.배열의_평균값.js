/* 
배열의 평균값

Description
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 1,000
1 ≤ numbers의 길이 ≤ 100
정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

입출력 예
numbers                         	            result
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	                5.5
[89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]    94.0    
*/

// 풀이 1
// 화살표 함수 표현식과
// Array.prototype.reduce 배열 고차 함수 활용
const solution = (numbers) =>
  numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;

// 출이 2
function solution(numbers) {
  let sum = 0; // 선언 위치 주의
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const answer = sum / numbers.length; // 선언 위치 주의

  return answer;
}
