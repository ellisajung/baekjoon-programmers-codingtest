/* 
특이한 정렬

Description
정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 
이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 
정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 
n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000
1 ≤ numlist의 원소 ≤ 10,000
1 ≤ numlist의 길이 ≤ 100
numlist는 중복된 원소를 갖지 않습니다.

입출력 예
numlist                     	n	result
[1, 2, 3, 4, 5, 6]	            4	[4, 5, 3, 6, 2, 1]
[10000,20,36,47,40,6,10,7000]	30	[36, 40, 20, 47, 10, 6, 7000, 10000] 
*/

// 풀이 1
// 차이를 기준으로 정렬
// 차이 같을 경우 큰수가 앞에
const solution = (numlist, n) =>
  numlist.sort((a, b) =>
    Math.abs(n - a) - Math.abs(n - b)
      ? Math.abs(n - a) - Math.abs(n - b)
      : b - a
  );

console.log(solution([1, 2, 3, 4, 5, 6], 4));

// 풀이 1 최적화
// || 논리연산자를 이용한 단축평가
const solution = (numlist, n) =>
  numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

/* 
참고) 
sort 메서드의 비교함수
- compareFn(a, b) *return value*에 따라 정렬
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
