/* 
직사각형 넓이 구하기

Description
2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 
담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 
return 하도록 solution 함수를 완성해보세요.

제한사항
dots의 길이 = 4
dots의 원소의 길이 = 2
-256 < dots[i]의 원소 < 256
잘못된 입력은 주어지지 않습니다.

입출력 예
dots	                                result
[[1, 1], [2, 1], [2, 2], [1, 2]]	    1
[[-1, -1], [1, 1], [1, -1], [-1, 1]]	4 
*/

// // 풀이 1
// // 높이 - x좌표가 같은 두 배열 요소의, y좌표 차의 절댓값
// // 너비 - y좌표가 같은 두 배열 요소의, x좌표 차의 절댓값
// // Array.prototype.flat([depth]) - 깊이 1이 기본값
// // [1,[2,3]].flat() // [1,2,3]
// const solution = (dots) => {
//   const [x1, y1, x2, y2, x3, y3, x4, y4] = [...dots.flat()];
//   const height = dots.find(x1);
//   const width = dots.filter();
// };

// 풀이 2
// x좌표, y좌표 중복 제거 후 배열로 변환
// 차의 곱 구하기
// Set 객체에 접근하는 법? - 순회할 수는 있음...
const solution = (dots) => {
  const [x1, y1, x2, y2, x3, y3, x4, y4] = [...dots.flat()];
  const xCoords = [...new Set([x1, x2, x3, x4])];
  const yCoords = [...new Set([y1, y2, y3, y4])];
  return Math.abs(xCoords[0] - xCoords[1]) * Math.abs(yCoords[0] - yCoords[1]);
};
