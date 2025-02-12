// /* 내 풀이 1 - brute force */

// // diff <= level
// // 퍼즐 당 총 소요시간: time_cur

// // diff > level인 경우
// // 틀리는 횟수: diff - level
// // 틀릴 때마다 사용하는 시간: time_cur + time_prev
// // 퍼즐 당 총 소요시간: (time_cur + time_prev) * (diff - level) + time_cur
// function solution(diffs, times, limit) {
//   let maxLevel = 0;

//   diffs.forEach((diff) => {
//     maxLevel = Math.max(diff, maxLevel);
//     // console.log(maxLevel);
//   });

//   let totalTime = 0;
//   while (totalTime <= limit) {
//     totalTime = 0; // 총 소요시간 초기화
//     maxLevel--;
//     // console.log("maxLevel: ", maxLevel);
//     totalTime += times[0];

//     // 특정 레벨에서 총 소요시간 구함
//     for (let i = 1; i < diffs.length; i++) {
//       const time =
//         diffs[i] > maxLevel
//           ? (times[i] + times[i - 1]) * (diffs[i] - maxLevel) + times[i]
//           : times[i];
//       totalTime += time;
//       //   console.log(i, "Time: ", time);
//     }
//     // console.log("totalTime: ", totalTime);
//   }
//   return maxLevel + 1;
// }

/* 내 풀이 2 - 이진 검색 */

// level 범위: 1 ~ max(diffs)
// 총 소요시간: diffs 순회하며 total += 소요시간
// 소요시간:
// diff <= level 일 경우, time_cur
// diff > level 일 경우, (time_cur + time_prev) * (diff - level) + time_cur
// 총 소요시간 > limit 일 경우, left = level + 1
// 총 소요시간 <= limit 일 경우, right = level - 1

const solution = (diffs, times, limit) => {
  let left = 1,
    right = 100000;
  // right = Math.max(...diffs); // 이렇게 되면 이진검색 알고리즘을 쓰는 의미가 없지 바보야^^

  while (left <= right) {
    let level = Math.floor(left + (right - left) / 2);
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        totalTime += times[i];
      } else {
        totalTime += (times[i] + times[i - 1]) * (diffs[i] - level) + times[i];
      }
    }

    if (totalTime > limit) {
      left = level + 1;
    } else if (totalTime <= limit) {
      right = level - 1;
    }
  }

  return left;
};

// console.log(solution([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723));
// console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
console.log(
  solution([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012),
);
