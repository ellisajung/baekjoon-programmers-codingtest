/* 
피자 나눠 먹기 (2)

Description
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ n ≤ 100

입출력 예
n	result
6	1
10	5
4	2 
*/

// 플이 1
// n*p === 6의 배수
// 를 만족시키는 p의 최솟값
// 이때의 (n*p)/6 값
const solution = (n) => {
  // p = [1,2,3,6]
  let p;
  if (n % 6 === 0) p = 1;
  else if (n % 3 === 0) p = 2;
  else if (n % 2 === 0) p = 3;
  else p = 6;
  return (n * p) / 6;
};

// 풀이 2
// 특정 연산이 반복될 땐 while문 활용하기
// 6의 배수를 곱하기 연산자로 생각하면 곱해주는 수가 변하지만, 더하기 연산자로 생각하면 계속 6씩 더해주면 됨
// 한사람 당 몇조각이 아니라 총 조각 생각
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};
