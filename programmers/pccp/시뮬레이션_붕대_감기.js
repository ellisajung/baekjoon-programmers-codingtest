// while (체력 <= health)
// 붕대 감기 기술: [t, x, y]
// 연속 성공 시간 s
// s < t -> s * x
// s = t -> s * x + y
// 몬스터 공격 패턴: [[공격시점, 피해량]]
// 모든 공격 끝난 후 남는 체력 > 0 ? 남는 체력 : -1

// 풀이 1
// 연속성공시간 s 배열
// 순회하며 s/t
// 몫 * (s * x + y)
// 나머지 * (s * x)
// 위 두개를 더한 값을 answer에 더함
// answer - 총 공격량
// answer > 0 ? answer : -1
function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let answer = health;

  const s = attacks[0][0] - 1;

  for (let j = 1; j <= s; j++) {
    j % t ? (answer += x) : (answer += x + y);
    if (answer > health) {
      answer = health;
    }
  }

  answer -= attacks[0][1];
  if (answer <= 0) {
    return -1;
  }

  for (let i = 0; i < attacks.length - 1; i++) {
    const s = attacks[i + 1][0] - attacks[i][0] - 1;

    for (let j = 1; j <= s; j++) {
      j % t ? (answer += x) : (answer += x + y);
      if (answer > health) {
        answer = health;
      }
    }

    answer -= attacks[i + 1][1];
    if (answer <= 0) {
      return -1;
    }
  }

  return answer;
}

// console.log(
//   solution([5, 1, 5], 30, [
//     [2, 10],
//     [9, 15],
//     [10, 5],
//     [11, 5],
//   ]),
// );

console.log(
  solution([3, 2, 7], 20, [
    [1, 15],
    [5, 16],
    [8, 6],
  ]),
);
