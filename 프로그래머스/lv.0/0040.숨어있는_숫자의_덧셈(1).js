/* 
숨어있는 숫자의 덧셈 (1)

Description
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

입출력 예
my_string   	result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	16 
*/

const solution = (my_string) => {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!Number.isNaN(parseInt(my_string[i]))) answer += parseInt(my_string[i]);
  }
  return answer;
};

// console.log(NaN + 1);
// console.log(parseInt("a"));
