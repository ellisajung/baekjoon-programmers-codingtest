/* 
가장 큰 수 찾기

Description
정수 배열 array가 매개변수로 주어질 때, 
가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.

입출력 예
array	        result
[1, 8, 3]   	[8, 1]
[9, 10, 11, 8] 	[11, 2] 
*/

// 풀이 1
const solution = (array) => {
  const copy_array = [...array];
  copy_array.sort((a, b) => b - a);
  return [copy_array[0], array.indexOf(copy_array[0])];
};

// 풀이 2
const solution = (array) => [
  Math.max(...array),
  array.indexOf(Math.max(...array)),
];
