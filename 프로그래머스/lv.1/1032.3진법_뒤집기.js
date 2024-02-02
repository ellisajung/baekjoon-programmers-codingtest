/* 
3진법 뒤집기

Description
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예
n	    result
45	    7
125	    229 
*/

// 풀이 1
// parseInt(string[, radix]) - n진수(radix) 문자열을 *10진수*로 변환하여 반환
// Number.prototype.toString([radix]) - *10진수*를 n진수 문자열로 변환할 수 있음
const solution = (n) => {
  const terArr = [...n.toString(3)];
  return terArr
    .map((v, i) => Number(v) * 3 ** i)
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(parseInt(45 + "", 3)); // NaN
console.log(parseInt("45", 3)); // NaN
console.log((45).toString(3)); // 1200
console.log(parseInt("0021", 10)); // 21

// 풀이 2
const solution = (n) => parseInt([...n.toString(3)].reverse().join(""), 3);

/*
참고)
n진수 -> 10진수 변환

    1) 자릿수(0부터)별로 2의 거듭제곱 값을 곱한 후
    2) 더하기
    
    예) 1101(2) = 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 = 13
*/
