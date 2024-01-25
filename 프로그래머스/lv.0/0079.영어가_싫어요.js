/*
영어가 싫어요

Description
영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
문자열 numbers가 매개변수로 주어질 때,
numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

제한사항
numbers는 소문자로만 구성되어 있습니다.
numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
1 ≤ numbers의 길이 ≤ 50
"zero"는 numbers의 맨 앞에 올 수 없습니다.

입출력 예
numbers                             	result
"onetwothreefourfivesixseveneightnine"	123456789
"onefourzerosixseven"               	14067
*/

// 풀이 1 "오답"
// 배열 디스트럭처링 할당
// 영어 나눠서 배열로 변환후
// join
const arr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// const solution = (numbers) => {
//   const answer = numbers
//     .match(/zero+|one+|two+|three+|four+|five+|six+|seven+|eight+|nine+/g)
//     .map((e) => arr.indexOf(e))
//     .join("");
//     console.log(answer) // 11-1110
//   return Number(answer);
// };

// console.log(solution("oneonezerooneoneonezero")); // NaN

// 풀이 1 "오답" 정정
const solution = (numbers) => {
  const answer = numbers
    .match(/zero+|one+|two+|three+|four+|five+|six+|seven+|eight+|nine+/g)
    .map((e) => arr.indexOf(e))
    .join("");
  console.log(
    numbers.match(
      /zero+|one+|two+|three+|four+|five+|six+|seven+|eight+|nine+/g
    )
  ); // [ 'one', 'one', 'zeroo', 'one', 'one', 'zero' ]
  console.log(
    numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g)
  ); // ['one', 'one', 'zero', 'one', 'one', 'one', 'zero']
  console.log(answer);
  return Number(answer);
};

console.log(solution("oneonezerooneoneonezero"));

// 풀이 2
function solution(numbers) {
  const repStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    numbers = numbers.replaceAll(repStr[i], i);
  }
  return +numbers; // 단항 산술 연산자를 이용한 명시적 타입 변환 (문자열->숫자)
}

console.log(+"10"); // 10
