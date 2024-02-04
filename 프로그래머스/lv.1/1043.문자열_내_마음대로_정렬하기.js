/* 
문자열 내 마음대로 정렬하기

Description
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 
각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 
각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

제한 조건
strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

입출력 예
strings                 	n	return
["sun", "bed", "car"]	    1	["car", "bed", "sun"]
["abce", "abcd", "cdx"]	    2	["abcd", "abce", "cdx"] 
*/

// // 풀이 1 "오답"
// // n번째를 기준으로 정렬하는 비교함수 전달
// const solution = (strings, n) =>
//   strings.sort((a, b) => (a[n] < b[n] ? -1 : 1));

// // 비교함수는 작동함...
// console.log(solution(["sun", "bed", "car"], 2)); // [ 'bed', 'sun', 'car' ]
// // 사전식으로는 안됨
// console.log(solution(["sun", "bed", "car", "banana"], 1)); // [ 'bed', 'banana', 'car', 'sun' ]
// // 기본은 사전식으로 !!
// console.log(["sun", "bed", "cu", "car"].sort()); // [ 'bed', 'car', 'cu', 'sun' ]

// 풀이 2 "오답" - 무한루프...
/* 
n번째를 기준으로 정렬하는 비교함수 전달
재귀함수로 사전식 구현
    같은지 확인 후 
        같으면 그 다음 글자 전달
        다르면 비교함수 로직
 */
const solution = (strings, n) =>
  strings.sort((a, b) => {
    a = a[n];
    b = b[n];
    while (a === b) n++;
    console.log(a, b, n);
    return a < b ? -1 : 1;
  });

console.log(solution(["abce", "abcd", "cdx"], 2));

// 풀이 3
const solution = (strings, n) => {
  return strings.sort((a, b) => {
    const charA = a[n];
    const charB = b[n];
    if (charA === charB) {
      // 인덱스 n의 문자가 같은 경우 사전순으로 정렬
      return a > b ? 1 : -1;
    } else {
      // 인덱스 n의 문자로 정렬
      return charA > charB ? 1 : -1;
    }
  });
};

/*
참고)
1) compareFn - (a,b)=>{}

A function that defines the sort order. 
The return value should be a number whose sign indicates 
the relative order of the two elements: 
    negative if a is less than b, 
    positive if a is greater than b, 
    and zero if they are equal. 
    NaN is treated as 0. 
    The function is called with the following arguments:

    a
    The first element for comparison. Will never be undefined.

    b
    The second element for comparison. Will never be undefined.

If omitted, the array elements are converted to strings, 
then sorted according to each character's Unicode code point value.


2) array의 요소들의 유니코드의 코드 포인트 비교는 언제 일어나는가?
*/
