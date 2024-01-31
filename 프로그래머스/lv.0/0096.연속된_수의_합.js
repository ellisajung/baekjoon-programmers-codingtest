/* 
연속된 수의 합

Description
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
두 정수 num과 total이 주어집니다. 
연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

제한사항
1 ≤ num ≤ 100
0 ≤ total ≤ 1000
num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

입출력 예
num	total	result
3	12	    [3, 4, 5]
5	15	    [1, 2, 3, 4, 5]
4	14	    [2, 3, 4, 5]
5	5	    [-1, 0, 1, 2, 3] 
*/

// total/n === result의 평균값이고,
// 연속된 수이므로,
// total/n - (n-1)/2 을 첫번째 수로
// 1씩 증가하는 길이 n인 배열
const solution = (num, total) =>
  Array.from({ length: num }, (_, i) => i + total / num - (num - 1) / 2);

console.log(14 / 4);
console.log(solution(3, 12));
console.log(solution(4, 14));
