/* 
숫자 찾기

Description
정수 num과 k가 매개변수로 주어질 때, 
num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고
없으면 -1을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < num < 1,000,000
0 ≤ k < 10
num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

입출력 예
num	    k	result
29183	1	3
232443	4	4
123456	7	-1 
*/

// 풀이 1
// Array.prototype.indexOf()
// 암묵적 타입 변환 안됨 주의
const solution = (num, k) =>
  [...String(num)].indexOf(String(k)) !== -1
    ? [...String(num)].indexOf(String(k)) + 1
    : -1;

// 풀이 1-1
// 한줄 코딩도 좋지만 반복되는건 변수 선언 해주자
const solution = (num, k) => {
  const ind = [...String(num)].indexOf(String(k));
  return ind !== -1 ? ind + 1 : -1;
};

// 풀이 2
// String.prototype.indexOf()도 있음!!
const solution = (num, k) => {
  let ind = ("" + num).indexOf(k);
  return ind === -1 ? -1 : ind + 1;
};

// 참고)
// 숫자를 문자열로 변환하는 방법
// (1) + 이항 산술 연산자 - 하나 이상의 문자열 피연산자가 있을 경우, 문자열 연결 연산자로 작동 (문자열로 암묵적 타입 변환)
// (2) String 생성자 함수 - new를 생략하고 호출하면 String 인스턴스가 아닌 문자열 반환 (명시적 타입 변환에 활용)
// (3) Number.prototype.toString() - 인수 생략하면 10진수 문자열 반환

// // 풀이 3
// // Array.prototype.find()
// // 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여,
// // 반환값이 true인 첫번째 요소를 반환
// const solution = (num, k) => {
//   [...String(num)].indexOf(String(k));
// };
