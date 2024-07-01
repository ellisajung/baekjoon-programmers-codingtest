/* 
캐릭터의 좌표

Description
머쓱이는 RPG게임을 하고 있습니다. 
게임에는 up, down, left, right 방향키가 있으며 
각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 
예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], 
down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 
머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 
캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 
캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

[0, 0]은 board의 정 중앙에 위치합니다. 
예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 
오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

제한사항
board은 [가로 크기, 세로 크기] 형태로 주어집니다.
board의 가로 크기와 세로 크기는 홀수입니다.
board의 크기를 벗어난 방향키 입력은 무시합니다.
0 ≤ keyinput의 길이 ≤ 50
1 ≤ board[0] ≤ 99
1 ≤ board[1] ≤ 99
keyinput은 항상 up, down, left, right만 주어집니다.

입출력 예
keyinput                                  	board	    result
["left", "right", "up", "right", "right"]	[11, 11]	[2, 1]
["down", "down", "down", "down", "down"]	[7, 9]	    [0, -4] 
*/

// // 풀이 1 "오답"
// // -(x-1)/2 <= a <= (x-1)/2
// // -(y-1)/2 <= b <= (y-1)/2
// const solution = (keyinput, board) => {
//   const [x, y] = board;
//   const [a, b] = [0, 0];
//   let keyObj = { left: a--, right: a++, up: b++, down: b-- };
//   keyinput.map((e) => {
//     while (
//       a >= -(x - 1) / 2 &&
//       a <= (x - 1) / 2 &&
//       b >= -(y - 1) / 2 &&
//       b <= (y - 1) / 2
//     )
//       keyObj[e];
//   });
//   return [a, b];
// };

// // 풀이 2
// // up과 down의 개수, left과 right의 개수 각각 구한 후
// // 계산
// // 다 구한 다음 범위 체크해서 넘어가면 최댓값 반환
// const solution = (keyinput, board) => {
//   const [a, b] = board;
//   let x =
//     keyinput.filter((e) => e === "right").length -
//     keyinput.filter((e) => e === "left").length;
//   if (x < -(a - 1) / 2) x = -(a - 1) / 2;
//   if (x > (a - 1) / 2) x = (a - 1) / 2;
//   let y =
//     keyinput.filter((e) => e === "up").length -
//     keyinput.filter((e) => e === "down").length;
//   if (y < -(b - 1) / 2) y = -(b - 1) / 2;
//   if (y > (b - 1) / 2) y = (b - 1) / 2;
//   return [x, y];
// };

// // 풀이 2 최적화 "오답"
// const solution = (keyinput, board) => {
//   const maxX = (board[0] - 1) / 2;
//   const maxY = (board[1] - 1) / 2;
//   //   console.log(maxX, maxY);
//   const countKey = (key) => keyinput.filter((e) => e === key).length;
//   let x = countKey("right") - countKey("left");
//   //   console.log(countKey("right"), countKey("left"));
//   if (x < -maxX) x = -maxX;
//   if (x > maxX) x = maxX;
//   let y = countKey("up") - countKey("down");
//   //   console.log(countKey("up"), countKey("down"));
//   if (y < -maxY) y = -maxY;
//   if (y > maxY) y = maxY;
//   return [x, y];
// };

// console.log(solution(["down", "down", "down", "down", "down", "up"], [1, 1])); // [ 0, -0 ]

// 풀이 2 최적화 "오답" 정정
// - 마이너스 부호가 붙는 변수는 항상 주의할 것!! 변수가 0일 경우 -0 출력
const solution = (keyinput, board) => {
  const maxX = (board[0] - 1) / 2;
  const maxY = (board[1] - 1) / 2;
  console.log(maxX, maxY);
  const countKey = (key) => keyinput.filter((e) => e === key).length;
  let x = countKey("right") - countKey("left");
  console.log(countKey("right"), countKey("left"));
  let y = countKey("up") - countKey("down");
  console.log(countKey("up"), countKey("down"));
  if (x < -maxX) x = parseInt(-maxX);
  console.log(x);
  if (x > maxX) x = maxX;
  console.log(x);
  if (y < -maxY) y = parseInt(-maxY);
  console.log(y);
  if (y > maxY) y = maxY;
  console.log(y);
  return [x, y];
};
console.log(solution(["up", "down", "down", "down"], [5, 3]));

// // 풀이 3
// // up과 right, down과 left에 각각 1, -1 할당 후
// // reduce로 합 구하기
// // 다 구한 다음 범위 체크해서 넘어가면 최댓값 반환
// const keys = { up: 1, down: -1, left: -1, right: 1 };

// const solution = (keyinput, board) => {
//   const maxX = (board[0] - 1) / 2;
//   const maxY = (board[1] - 1) / 2;
//   let x = keyinput
//     .filter((key) => key === "left" || key === "right")
//     .reduce((acc, cur) => acc + keys[cur], 0);
//   let y = keyinput
//     .filter((key) => key === "up" || key === "down")
//     .reduce((acc, cur) => acc + keys[cur], 0);
//   if (x < -maxX) x = parseInt(-maxX);
//   if (x > maxX) x = maxX;
//   if (y < -maxY) y = parseInt(-maxY); // Number(-maxY) // -0
//   if (y > maxY) y = maxY;
//   return [x, y];
// };
// // 풀이 3 최적화
// // up과 right, down과 left에 각각 1, -1 할당 후
// // reduce로 합 구하기
// // 다 구한 다음 범위 체크해서 넘어가면 최댓값 반환

// const solution = (keyinput, board) => {
//   const keys = { up: 1, down: -1, left: -1, right: 1 };
//   const maxX = (board[0] - 1) / 2;
//   const maxY = (board[1] - 1) / 2;
//   const keySum = (key1, key2) =>
//     keyinput
//       .filter((e) => e === key1 || e === key2)
//       .reduce((acc, cur) => acc + keys[cur], 0);
//   let x = keySum("left", "right");
//   let y = keySum("up", "down");
//   if (x < -maxX) x = parseInt(-maxX);
//   if (x > maxX) x = maxX;
//   if (y < -maxY) y = parseInt(-maxY); // Number(-maxY) // -0
//   if (y > maxY) y = maxY;
//   return [x, y];
// };
