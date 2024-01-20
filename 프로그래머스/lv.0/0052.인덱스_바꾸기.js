/* 
인덱스 바꾸기

Description
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 < my_string의 길이 < 100
0 ≤ num1, num2 < my_string의 길이
my_string은 소문자로 이루어져 있습니다.
num1 ≠ num2

입출력 예
my_string   	num1	num2	result
"hello"     	1   	2	    "hlelo"
"I love you"	3	    6	    "I l veoyou" 
*/

// 풀이 1
const solution = (my_string, num1, num2) => {
  const str_arr = [...my_string]; // my_string.split('')
  const a = str_arr[num1],
    b = str_arr[num2];
  str_arr[num1] = b;
  str_arr[num2] = a;
  return str_arr.join("");
};

solution("I love you", 3, 6);

// 풀이 2
// 배열 디스트럭처링 할당
const solution = (my_string, num1, num2) => {
  const str_arr = [...my_string]; // my_string.split('')
  [str_arr[num1], str_arr[num2]] = [str_arr[num2], str_arr[num1]];
  return str_arr.join("");
};
