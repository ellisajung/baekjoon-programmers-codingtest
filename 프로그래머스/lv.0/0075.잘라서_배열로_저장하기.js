/* 
잘라서 배열로 저장하기

Description
문자열 my_str과 n이 매개변수로 주어질 때, 
my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_str의 길이 ≤ 100
1 ≤ n ≤ my_str의 길이
my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

입출력 예
my_str          	n	result
"abc1Addfggg4556b"	6	["abc1Ad", "dfggg4", "556b"]
"abcdef123"     	3	["abc", "def", "123"] 
*/

// 풀이 1 "오답"
// const solution = (my_str, n) => {
//   const result = my_str.match(new RegExp(".".repeat(n), "g"));
// };
// console.log("abc1Addfggg4556b".match(/....../g));

// 풀이 1-1 정정
const solution = (my_str, n) => my_str.match(new RegExp(`.{1,${n}}`, "g"));

// 풀이 2
// String.prototype.slice - 첫번째 인수부터 두번째 인수 전까지 자른 후 반환. 음수 인수 전달 가능.
const solution = (my_str, n) => {
  const answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n + 1));
  }
  return answer;
};
console.log("avs".slice(0, 5));
