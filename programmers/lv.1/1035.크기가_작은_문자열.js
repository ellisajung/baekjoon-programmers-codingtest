/* 
크기가 작은 부분문자열

Description
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 
이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 
314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 
작거나 같은 수는 141, 159 2개 입니다.

제한사항
1 ≤ p의 길이 ≤ 18
p의 길이 ≤ t의 길이 ≤ 10,000
t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.

입출력 예
t	            p	    result
"3141592"	    "271"	2
"500220839878"	"7" 	8
"10203"	        "15"	3 
*/

// 풀이 1
const solution = (t, p) => {
  const arr = [];
  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(t.slice(i, i + p.length));
    console.log(t.slice(i, i + p.length));
  }
  return arr.filter((e) => +e <= +p).length;
};

console.log(solution("500220839878", "7"));

console.log("123" < "1134"); // false
console.log(+"123" < +"1134"); // true
console.log(typeof +"123"); // number

console.log("123456".match(/.../g)); // [ '123', '456' ]
console.log("123456".match(/\d{3}/g)); // [ '123', '456' ]

// 풀이 2
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    +t.slice(i, i + p.length) <= +p ? count++ : 0;
  }
  return count;
}

/* 
참고)

1) Lookahead assertion - 전방탐색으로 특정 패턴이 뒤따라오는지(오른쪽) 확인, 이때 문자열을 반환하는 것이 아니라 매치지점만 찾는 것
    // (?=pattern)
    // (?!pattern)

2) Lookbehind assertion - 후방탐색으로 특정 패턴이 선행하는지(왼쪽) 확인, 이때 문자열을 반환하는 것이 아니라 매치지점만 찾는 것
    // (?<=pattern)
    // (?<!pattern)

링크)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
*/
