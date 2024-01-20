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

// 풀이 1
// 숫자로 명시적 타입 변환 (1) - parseInt() 빌트인 객체 사용
// 참고로, Number.isNaN()말고 그냥 isNaN() 사용 가능
const solution = (my_string) => {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!Number.isNaN(parseInt(my_string[i]))) answer += parseInt(my_string[i]);
  }
  return answer;
};

// // console.log(NaN + 1);
// // console.log(parseInt("a"));

// 풀이 2
// 숫자로 명시적 타입 변환 (2) - Number 빌트인 객체 사용
// new 연산자 없이 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환

// 정규표현식으로 문자열 내 숫자를 제외한 문자 제거
// 숫자 문자열을 순회하며 숫자로 타입 변환후 합 구하기
const solution = (my_string) => {
  const num_string = my_string.split(/[^0-9]+/g).join("");
  let answer = 0;
  for (let i = 0; i < num_string.length; i++) {
    answer += Number(num_string[i]);
  }
  return answer;
};
console.log(solution("aAb1B2cC34oOp"));
