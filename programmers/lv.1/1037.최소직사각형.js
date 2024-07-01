/* 
최소직사각형

Description
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

명함 번호	가로 길이	세로 길이
1	      60    	50
2	      30    	70
3	      60    	30
4	      80    	40

가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 
80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요. 
*/

// 풀이 1
// 일단 가장 긴 변이 가로가 되게 다 돌린 후 - map으로 순회하며 max, min 배열에 분류
// 가로 최댓값 * 세로 최댓값 - max 중에 max * min 중에 min
const solution = (sizes) => {
  const max = [];
  const min = [];
  sizes.map((e) => {
    max.push(Math.max(...e));
    min.push(Math.min(...e));
  });
  console.log(max, min);
  return Math.max(...max) * Math.max(...min);
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

// 풀이 1 최적화
// 1) 불필요한 배열 생성 및 push 메서드 삭제
// 2) sort 메서드 사용으로 비교 연산 1번만 수행
const solution = (sizes) => {
  let w = 0;
  let h = 0;
  sizes.forEach((e) => {
    // if (Math.max(...e) > w) w = Math.max(...e);
    // if (Math.min(...e) > h) h = Math.min(...e);
    e = e.sort((a, b) => a - b);
    if (e[1] > w) w = e[1];
    if (e[0] > h) h = e[0];
  });
  return w * h;
};
