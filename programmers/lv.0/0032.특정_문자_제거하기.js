/* 
특정 문자 제거하기

Description
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.

입출력 예
my_string	letter	result
"abcdef"	"f" 	"abcde"
"BCBdbe"	"B"	    "Cdbe" 
*/

// 풀이 1
// String.prototype.replace()은
// 검색된 문자열이 여럿 존재할 경우 첫번째로 검색된 문자열만 치환
// 따라서, RegExp 생성자함수 사용하여 변수를 포함하는 동적 정규표현식 생성
// new RegExp(pattern[, flags])
const solution = (my_string, letter) =>
  my_string.replace(new RegExp(letter, "g"), "");
// console.log(solution("affbcdef", "f"));

// 풀이 2
// String.prototype.replaceAll()
const solution = (my_string, letter) => my_string.replaceAll(letter, "");

// 풀이 3
const solution = (my_string, letter) => my_string.split(letter).join("");
