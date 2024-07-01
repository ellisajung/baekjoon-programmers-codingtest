/* 
두 정수 사이의 합

Description
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.

입출력 예
a	b	return
3	5	12
3	3	3
5	3	12 
*/

// // 풀이 1
// // (b 까지의 합) - (a-1 까지의 합)
// // n까지의 합 = n(n+1)/2
// // 이건 자연수의 합...
// const solution = (a, b) => (b * (b + 1)) / 2 - (a * (a - 1)) / 2;

// 풀이 1
const solution = (a, b) =>
  Array.from(
    { length: Math.abs(a - b) + 1 },
    (_, i) => i + Math.min(a, b)
  ).reduce((acc, cur) => acc + cur, 0);

// 풀이 2
const solution = (a, b) => ((a + b) * (Math.abs(a - b) + 1)) / 2;
