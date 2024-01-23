/* 
합성수 찾기

Description
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 
자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100

입출력 예
n	result
10	5
15	8 
*/

/**
 * @see {@link ./0053.약수_구하기}
 * Array.from()
 * 첫번째 인수 - 유사배열객체＊ 또는 이터러블객체＊를 변환하여 배열 생성
 * 두번째 인수(optional) - 콜백함수(첫번째 인수에 의해 생성된 배열의 요소값,
 * 인덱스를 순차적으로 전달하면서 호출)의 반환값으로 구성된 배열 반환
 * 예) const solution = (n) =>
 *      Array.from({ length: n }, (_, i) => i + 1).filter((e) => n % e === 0);
 */

// 풀이 1
// n까지의 자연수 배열을 순회하며 (2부터)
// map으로 약수의 개수로 구성된 배열 반환
// filter로 2인 요소 제거
// 배열 길이 반환

function solution(n) {
  const numArr = Array.from({ length: n - 1 }, (_, i) => i + 2);
  const divArr = (num) => {
    let countDiv = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) countDiv++;
    }
    return countDiv;
  };

  return numArr.map((num) => divArr(num)).filter((div) => div !== 2).length;
}

// 풀이 1 최적화
// (1) 소수 여부 확인 시 범위 축소
// (2) 소수 판별 함수 추가
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n) {
  return Array.from({ length: n - 1 }, (_, i) => i + 2).filter(
    (num) => !isPrime(num)
  ).length;
}

// 풀이 2
// 에라토스테네스의 체
