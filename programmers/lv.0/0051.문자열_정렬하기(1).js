/* 
문자열 정렬하기 (1)

Description
문자열 my_string이 매개변수로 주어질 때, 
my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -

입출력 예
my_string	result
"hi12392"	[1, 2, 2, 3, 9]
"p2o4i8gj2"	[2, 2, 4, 8]
"abcde0"	[0] 
*/

// 풀이 1
// 숫자 배열 구하기
// 숫자로 타입 변환
// 오름차순 정렬
const solution = (my_string) => {
  const num_str = my_string.replaceAll(/[^0-9]/g, "");
  return [...num_str].map((str) => Number(str)).sort((a, b) => a - b);
};

// 풀이 2
const solution = (my_string) =>
  my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
