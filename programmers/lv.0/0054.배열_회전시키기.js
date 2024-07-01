/* 
배열 회전시키기

Description
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.

입출력 예
numbers                 	direction	result
[1, 2, 3]	                "right" 	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"  	[455, 6, 4, -1, 45, 6, 4] 
*/

// 참고)
// Array.prototype.push - (인수로 전달받은 모든 값) 마지막 요소로 추가 (변경된 length 프로퍼티 값 반환)
// Array.prototype.pop - 마지막 요소 제거 (제거한 요소 반환)
// Array.prototype.unshift - (인수로 전달받은 모든 값) 선두에 요소로 추가 (변경된 length 프로퍼티 값 반환)
// Array.prototype.shift - 첫번째 요소 제거 (제거한 요소 반환)
// *위 메서드 모두 원본배열 직접 변경!!
// *push, unshift은 스프레드 문법으로 대체가능

// 풀이 1
// right - pop, unshift
// left - shift, push
const solution = (numbers, direction) => {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
    return numbers;
    // console.log(numbers.unshift(numbers.pop()));
    // console.log(numbers);
  } else {
    numbers.push(numbers.shift());
    return numbers;
  }
};

// 풀이 2
// 삼항 조건 연산자 - 표현식인 문
const solution = (numbers, direction) => {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
};

// 풀이 2-1
// 삼항 조건 연산자 - 표현식인 문
// 쉼표 연산자 - 왼쪽 피연산자부터 차례대로 평가하고,
// 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환
const solution = (numbers, direction) =>
  direction === "right"
    ? (numbers.unshift(numbers.pop()), numbers)
    : (numbers.push(numbers.shift()), numbers);

// 풀이 2-2
const solution = (numbers, direction) => (
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift()),
  numbers
);

console.log(solution([1, 2, 3], "right"));
