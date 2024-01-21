/* 
약수 구하기

Description
정수 n이 매개변수로 주어질 때, 
n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 10,000

입출력 예
n	result
24	[1, 2, 3, 4, 6, 8, 12, 24]
29	[1, 29] 
*/

// 풀이 1
const solution = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) answer.push(i);
  }
  return answer;
};

// 풀이 2
// Array.from
// 첫번째 인수 - 유사배열객체＊ 또는 이터러블객체＊를 변환하여 배열 생성
// 두번째 인수(optional) - 콜백함수(첫번째 인수에 의해 생성된 배열의 요소값, 인덱스를 순차적으로 전달하면서 호출)의 반환값으로 구성된 배열 반환
// 예) Array.from({length:3}, (_,i)=>i); // [0,1,2]
const solution = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((e) => n % e === 0);

// 참고1)
// 유사배열객체
// (1) 인덱스로 프로퍼티 접근 가능
// (2) length 프로퍼티 존재
// (3) for문으로 순회 가능
// 이터러블
// (1) for...of문으로 순회 가능
// (2) 스프레드 문법 가능
// (3) 배열 디스트럭처링 할당 가능

// 참고2)
// 문자열을 각 문자를 요소로하는 배열로 변환하는 방법
// str = 'hello' -> ['h','e','l','l','o']
// (1) [...str]
// (2) str.slpit('')
// (3) Array.from(str)
