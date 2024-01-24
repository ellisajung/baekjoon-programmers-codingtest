/* 
이진수 더하기

Description
이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 
두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
return 값은 이진수를 의미하는 문자열입니다.
1 ≤ bin1, bin2의 길이 ≤ 10
bin1과 bin2는 0과 1로만 이루어져 있습니다.
bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

입출력 예
bin1	bin2	result
"10"	"11"	"101"
"1001"	"1111"	"11000" 
*/

// 풀이 1
// 이진수 십진수로 변환 후 더하기
// 더한 결과값 다시 이진수로 변환
// parseInt(string[, radix]) - 이진수 문자열을 십진수로 변환할 수 있음
// Number.prototype.toString([radix]) - 십진수를 이진수 문자열로 변환할 수 있음
const solution = (bin1, bin2) => {
  const decSum = parseInt(bin1, 2) + parseInt(bin2, 2);
  const binSum = decSum.toString(2);
  return binSum;
};

/* 
참고)
이진수 십진수 간 전환 (진수 간 전환)

// (1) Number.prototype.toString([radix])
//     - 숫자를 문자열로 변환
//     - radix (optional) - 반환할 숫자 문자열의 진법(2-36)을 인수로 전달할 수 있다. 기본값은 10.
// (2) parseInt(string[, radix])
//     - string - 정수로 변환할 값
//     - radix (optional) - 첫번째 인수로 받는 숫자의 진법
*/
