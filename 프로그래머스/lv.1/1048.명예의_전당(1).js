/* 
명예의 전당 (1)

Description
"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 
시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 
매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 
해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 
즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. 
k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 
출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 
예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 
명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.

그림1.png
https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b0893853-7471-47c0-b7e5-1e8b46002810/%EA%B7%B8%EB%A6%BC1.png

명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 
매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ k ≤ 100
7 ≤ score의 길이 ≤ 1,000
0 ≤ score[i] ≤ 2,000

입출력 예
k	score                                           result
3	[10, 100, 20, 150, 1, 100, 200]	                [10, 10, 10, 20, 20, 100, 100]
4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300] 
*/

// // 풀이 1
// // 매일 "명예의 전당" 꼴지 반환
// // score 순회하며
// // 현재 인덱스(i+1)까지 slice 후 - Array.prototype.slice(start, end)
// // 현재 인덱스가 k-1보다 작거나 같을 경우 최솟값 반환
// // 아니면 내림차순 정렬 후
// // k번째(k-1 인덱스)에 있는 수 반환
// const solution = (k, score) =>
//   score.map((_, i) => {
//     let arr = score.slice(0, i + 1);
//     return i <= k - 1 ? Math.min(...arr) : arr.sort((a, b) => b - a)[k - 1];
//   });

//   Test 1 〉	통과 (0.07ms, 33.4MB)
//   Test 2 〉	통과 (0.12ms, 33.4MB)
//   Test 3 〉	통과 (0.07ms, 33.4MB)
//   Test 4 〉	통과 (0.07ms, 33.4MB)
//   Test 5 〉	통과 (0.16ms, 33.5MB)
//   Test 6 〉	통과 (0.07ms, 33.4MB)
//   Test 7 〉	통과 (0.29ms, 33.5MB)
//   Test 8 〉	통과 (0.24ms, 33.5MB)
//   Test 9 〉	통과 (0.14ms, 33.5MB)
//   Test 10 〉	통과 (0.15ms, 33.5MB)
//   Test 11 〉	통과 (0.14ms, 33.4MB)
//   Test 12 〉	통과 (22.86ms, 36.6MB)
//   Test 13 〉	통과 (22.72ms, 36.6MB)
//   Test 14 〉	통과 (21.96ms, 36.8MB)
//   Test 15 〉	통과 (95.35ms, 36.6MB)
//   Test 16 〉	통과 (88.99ms, 36.7MB)
//   Test 17 〉	통과 (97.59ms, 36.6MB)
//   Test 18 〉	통과 (91.81ms, 36.6MB)
//   Test 19 〉	통과 (90.02ms, 36.6MB)
//   Test 20 〉	통과 (92.97ms, 36.6MB)
//   Test 21 〉	통과 (86.76ms, 36.7MB)
//   Test 22 〉	통과 (119.01ms, 36.6MB)
//   Test 23 〉	통과 (104.89ms, 36.7MB)
//   Test 24 〉	통과 (88.53ms, 36.6MB)
//   Test 25 〉	통과 (87.50ms, 36.6MB)
//   Test 26 〉	통과 (0.07ms, 33.4MB)

// 풀이 1 최적화
// *새로운 값 들어올 때마다 확인하고 명당에 push하는 방법*
// 명예의 전당 배열 생성
// score map으로 순회하며
// 길이가 k(인덱스가 k-1)가 될 때까지는 명당에 그냥 push 후 min 반환
// 초과할 때부터 배열의 최솟값(배열 Math.min 목록으로 전달)보다 클 경우 명당에 push 후
// 내림차순 정렬 후 k-1 인덱스 요소 반환 (밀려나는 점수 제거할 필요 x) - 어차피 sort
const solution = (k, score) => {
  const topK = [];
  return score.map((v, i) => {
    if (i <= k - 1) {
      topK.push(v);
      console.log(topK);
      return Math.min(...topK);
    } else if (v > Math.min(...topK)) {
      topK.push(v);
      topK.sort((a, b) => b - a).pop();
      return Math.min(...topK);
    } else return Math.min(...topK);
  });
};

// Test 1 〉	통과 (0.11ms, 33.5MB)
// Test 2 〉	통과 (0.06ms, 33.4MB)
// Test 3 〉	통과 (0.08ms, 33.4MB)
// Test 4 〉	통과 (0.08ms, 33.6MB)
// Test 5 〉	통과 (0.17ms, 33.5MB)
// Test 6 〉	통과 (0.10ms, 33.4MB)
// Test 7 〉	통과 (0.19ms, 33.5MB)
// Test 8 〉	통과 (0.17ms, 33.5MB)
// Test 9 〉	통과 (0.14ms, 33.6MB)
// Test 10 〉	통과 (0.18ms, 33.6MB)
// Test 11 〉	통과 (0.21ms, 33.4MB)
// Test 12 〉	통과 (1.43ms, 33.9MB)
// Test 13 〉	통과 (1.31ms, 33.8MB)
// Test 14 〉	통과 (1.60ms, 33.8MB)
// Test 15 〉	통과 (1.94ms, 34MB)
// Test 16 〉	통과 (1.97ms, 34MB)
// Test 17 〉	통과 (2.20ms, 34.1MB)
// Test 18 〉	통과 (3.81ms, 34MB)
// Test 19 〉	통과 (0.27ms, 33.6MB)
// Test 20 〉	통과 (0.31ms, 33.6MB)
// Test 21 〉	통과 (0.34ms, 33.6MB)
// Test 22 〉	통과 (0.55ms, 33.7MB)
// Test 23 〉	통과 (0.34ms, 33.6MB)
// Test 24 〉	통과 (0.65ms, 33.7MB)
// Test 25 〉	통과 (0.39ms, 33.7MB)
// Test 26 〉	통과 (0.10ms, 33.5MB)

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

// 풀이 3 최최적화
// 내림차순 정렬하여 Math.min()할 필요 없이 오름차순 정렬하여 0 인덱스 사용
solution = (k, score) => {
  const topK = [];
  return score.map((v, i) => {
    if (i <= k - 1) {
      topK.push(v);
      topK.sort((a, b) => a - b);
      return topK[0];
    } else if (v > Math.min(...topK)) {
      topK.push(v);
      topK.sort((a, b) => a - b).shift();
      return topK[0];
    } else return topK[0];
  });
};

// Test 1 〉	통과 (0.10ms, 33.4MB)
// Test 2 〉	통과 (0.07ms, 33.6MB)
// Test 3 〉	통과 (0.08ms, 33.4MB)
// Test 4 〉	통과 (0.09ms, 33.4MB)
// Test 5 〉	통과 (0.19ms, 33.5MB)
// Test 6 〉	통과 (0.08ms, 33.5MB)
// Test 7 〉	통과 (0.17ms, 33.6MB)
// Test 8 〉	통과 (0.19ms, 33.4MB)
// Test 9 〉	통과 (0.18ms, 33.4MB)
// Test 10 〉	통과 (0.22ms, 33.5MB)
// Test 11 〉	통과 (0.22ms, 33.5MB)
// Test 12 〉	통과 (1.17ms, 33.9MB)
// Test 13 〉	통과 (1.30ms, 33.9MB)
// Test 14 〉	통과 (0.86ms, 33.8MB)
// Test 15 〉	통과 (1.64ms, 34.2MB)
// Test 16 〉	통과 (1.76ms, 34.1MB)
// Test 17 〉	통과 (1.78ms, 34.2MB)
// Test 18 〉	통과 (1.80ms, 34.2MB)
// Test 19 〉	통과 (0.25ms, 33.7MB)
// Test 20 〉	통과 (0.27ms, 33.5MB)
// Test 21 〉	통과 (0.32ms, 33.6MB)
// Test 22 〉	통과 (0.33ms, 33.7MB)
// Test 23 〉	통과 (0.32ms, 33.6MB)
// Test 24 〉	통과 (0.32ms, 33.8MB)
// Test 25 〉	통과 (0.34ms, 33.6MB)
// Test 26 〉	통과 (0.07ms, 33.4MB)

/* 
참고)

정렬 vs 힙
https://chat.openai.com/share/7af7e92d-5584-4203-9e2e-cb0db79341d4

*/
