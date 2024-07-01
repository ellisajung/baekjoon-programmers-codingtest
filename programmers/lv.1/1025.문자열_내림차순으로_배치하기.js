/* 
문자열 내림차순으로 배치하기

Description
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.

입출력 예
s	        return
"Zbcdefg"	"gfedcbZ" 
*/

// // 풀이 1 // 문제 제대로 읽자^^
// /*
// 같은 문자인지 확인 - 둘다 소문자로 변환
//     맞으면 a 대문자인지 확인 - 정규표현식
//         맞으면 음수 반환
//         틀리면 양수 반환
//     틀리면 둘다 소문자로 변환 후 a<b 비교
//         맞으면 음수 반환
//         틀리면 양수 반환
// */
// const solution = (s) =>
//   [...s]
//     .sort((a, b) =>
//       a.toLowerCase() === b.toLowerCase()
//         ? /[A-Z]/.test(a)
//           ? -1
//           : 1
//         : a.toLowerCase() < b.toLowerCase()
//         ? -1
//         : 1
//     )
//     .join("");

// console.log([..."Zbcdefg"].sort()); // ['Z', 'b', 'c', 'd', 'e', 'f', 'g' ]
// console.log([..."aaaAAa"].sort()); // [ 'A', 'A', 'a', 'a', 'a', 'a' ]
// console.log([..."aaaBBa"].sort()); // [ 'B', 'B', 'a', 'a', 'a', 'a' ]

// 풀이 2
// 대문자와 소문자로 분류 후 - 정규표현식
// 각각 정렬 후 reverse
// 합치기 - join
const solution = (s) => {
  const lower = s.match(/[a-z]/g)?.sort().reverse() || [];
  const upper = s.match(/[A-Z]/g)?.sort().reverse() || [];
  console.log(lower, s.match(/[A-Z]/g), upper);
  return lower.join("") + upper.join("");
};

console.log([..."bcdefgzZB"].sort()); // [ 'B', 'Z', 'b', 'c', 'd', 'e', 'f', 'g', 'z' ]

// 풀이 3
const solution = (s) => [...s].sort().reverse().join("");

/* 
참고)
1) sort의 비교함수
    compareFn(a, b) return value	sort order
    > 0	                            sort a after b, e.g. [b, a]
    < 0	                            sort a before b, e.g. [a, b]
    === 0                           keep original order of a and b

2) 문자열과 연산자
    console.log("a" < "b"); // true *비교연산자만 평가됨*
    console.log("a" - "b" < 0); // false

    console.log("a" < "A"); // false
    console.log("a" > "A"); // true
*/
