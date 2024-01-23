/* 
k의 개수

Description
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 
정수 i, j, k가 매개변수로 주어질 때, 
i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9

입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0 
*/

/* 문제 풀기 전 요구하는 것 분명히 이해하고 넘어가자!!제발!! */

// 풀이 1 오답
// i부터 j까지의 배열 생성
// filter로 순회하며 k가 포함된 숫자만 담긴 배열 반환
const solution = (i, j, k) => {
  const arr = Array.from({ length: j - i + 1 }, (_, ind) => ind + i);
  console.log(arr);
  console.log(arr.filter((k) => arr.includes(k)));
  return arr.filter((k) => arr.includes(k)).length;
};
console.log(solution(1, 13, 1)); // 13

// 풀이 1-1 오답
// i부터 j까지의 배열 생성
// filter로 순회하며 k가 포함된 숫자만 담긴 배열 반환
// 정규표현식으로 찾으려면 일단 문자열로 변환
const solution = (i, j, k) => {
  const arr = Array.from({ length: j - i + 1 }, (_, ind) => ind + i);
  const pattern = new RegExp(k, "g");
  console.log(arr.filter((num) => ("" + num).includes(pattern))); // TypeError: First argument to String.prototype.includes must not be a regular expression
  return arr.filter((num) => ("" + num).includes(pattern))?.length ?? 0;
};
solution(3, 10, 2);

// 풀이 2
// Array.prototype.from
const solution = (i, j, k) => {
  const arr = Array.from({ length: j - i + 1 }, (_, ind) => ind + i);
  console.log(arr.join("").split(""));
  return arr
    .join("")
    .split("") // split(k)를 생각 못했네...
    .filter((num) => ("" + num).includes(k)).length;
};

console.log(solution(1, 13, 1));
console.log(solution(3, 10, 2));
console.log(solution(10, 50, 5));

// 풀이 3
// Array.prototype.fill
// String.prototype.split
function solution(i, j, k) {
  return (
    Array(j - i + 1)
      .fill(i)
      .map((v, i) => v + i) // i부터 j까지의 배열 생성
      .join("")
      .split(k).length - 1
  );
}

// 풀이 4
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) a += i;
  return a.split(k).length - 1;
}

/*
참고)

**i부터 j까지의 배열 생성하는 법
    (1) Array.prototype.from(iterable or 유사배열객체[, callback])
        // Array.from({ length: j - i + 1 }, (_, ind) => ind + i)
    (2) Array.prototype.fill
        // Array(j - i + 1).fill(i)

**String.prototype.split(str[, length])
    (1) 첫번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여
        문자열을 구분한 후, 분리된 각 문자열로 이루어진 배열 반환
    (2) 두번째 인수로 배열의 길이 지정 가능
    예) console.log("465121877551".split(1)); 
        // [ '465', '2', '87755', '' ]
        // , 자리에 1 넣는다고 생각!!

*/
