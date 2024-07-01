/* 
중복된 숫자 개수

Description
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 1,000
0 ≤ n ≤ 1,000

입출력 예
array	            n	result
[1, 1, 2, 3, 4, 5]	1	2
[0, 2, 3, 4]	    1	0 
*/

// 풀이 1
// Array.prototype.forEach 메서드 사용
const solution = (array, n) => {
  let answer = 0;
  array.forEach((num) => {
    if (num === n) ++answer;
  });
  return answer;
};

// 풀이 2
// for문 사용
const solution = (array, n) => {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) ++answer;
  }
  return answer;
};

// 풀이 3
// Array.prototype.filter() 사용
const solution = (array, n) => array.filter((num) => num === n).length;
