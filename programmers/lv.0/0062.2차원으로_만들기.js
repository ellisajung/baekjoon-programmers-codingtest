/* 
2차원으로 만들기

Description
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 
num_list를 2 * 4 배열로 다음과 같이 변경합니다. 
2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list                	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]

제한사항
num_list의 길이는 n의 배 수개입니다.
0 ≤ num_list의 길이 ≤ 150
2 ≤ n < num_list의 길이

입출력 예
num_list                        	n	result
[1, 2, 3, 4, 5, 6, 7, 8]        	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
[100, 95, 2, 4, 5, 6, 18, 33, 948]	3	[[100, 95, 2], [4, 5, 6], [18, 33, 948]] 
*/

// 풀이 1
// 숫자 배열 join
// 정규표현식, match로 n개씩 끊은 문자열 배열 반환
// map으로 순회하며 split
// 숫자로 변환은...? - map(Number)
const solution = (num_list, n) => {
  const pattern = ".".repeat(n);
  const regex = new RegExp(pattern, "g");
  return num_list
    .join("")
    .match(regex) // ["12","34","56","78"]
    .map((num) => num.split("").map(Number));
};
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log([..."12"]);
// Test 2
// Input 〉	[100, 95, 2, 4, 5, 6, 18, 33, 948], 3
// Expected 〉	[[100, 95, 2], [4, 5, 6], [18, 33, 948]]
// Result 〉	실행한 결괏값 [[1,0,0],[9,5,2],[4,5,6],[1,8,3],[3,9,4]]이 기댓값 [[100,95,2],[4,5,6],[18,33,948]]과 다릅니다.

// 풀이 2
// Array.prototype.slice(start[, end])
// start - 복사를 시작할 인덱스. 음수인 경우 뒤에서의 인덱스.
// end(optional) - 복사를 종료할 인덱스. 해당 인덱스는 미포함. 기본값은 length 프로퍼티 값, 즉 끝까지
const solution = (num_list, n) => {
  const answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
};

// 풀이 3
// Array.prototype.splice(start[, deleteCount, items])
// 원본 배열 직접 변경하며, 제거한 요소 배열을 반환
// start - 원본 배열의 요소를 제거하기 시작할 인덱스
// deleteCount - start부터 제거할 요소의 개수
// items - 제거한 위치에 삽입할 요소들의 목록
const solution = (num_list, n) => {
  const answer = [];
  while (num_list.length) {
    // num_list 배열이 비어있을 때까지 반복
    answer.push(num_list.splice(0, n));
  }
  return answer;
};

/* 
(참고)
Array.prototype.map
Array.prototype.flat - 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화. 기본값은 1이고, infinity를 전달하면 중첨 배열 모두를 평탄화.
Array.prototype.flatMap - map 메서드를 통해 생성된 새로운 배열을 1단계 평탄화. map과 flat을 순차적으로 실행한 것과 같음
 */
