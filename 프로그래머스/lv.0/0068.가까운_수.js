/* 
가까운 수

Description
정수 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ array의 길이 ≤ 100
1 ≤ array의 원소 ≤ 100
1 ≤ n ≤ 100
가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

입출력 예
array	        n	result
[3, 10, 28]	    20	28
[10, 11, 12]	13	12 
*/

// 풀이 1
// n을 array에 push 후 sort
// 전후 수와의 차이 크기 비교후 더 적은 수 반환
// Math.abs()
const solution = (array, n) => {
  array.push(n);
  array.sort((a, b) => a - b);
  const ind = array.indexOf(n);
  if (ind === 0) return array[1]; // n이 가장 작은 수일 경우, 두번째 수 반환
  if (ind === array.length - 1) return array[array.length - 2]; // n이 가장 큰 수일 경우, 뒤에서 두번째 수 반환

  const [a, b] = [array[ind - 1], array[ind + 1]];
  return Math.abs(a - n) <= Math.abs(b - n) ? a : b;
};

console.log(solution([3, 10, 28], 1));
console.log(solution([3, 10, 28], 29));

// 풀이 2
// Array.prototype.sort
// *비교함수*를 전달하여 차이의 절댓값을 비교하며 정렬하기
// || 연산자를 이용한 단축평가
function solution(array, n) {
  // Math.abs(n - a) - Math.abs(n - b) === 0(falsy 값)일 경우, a-b 반환
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}

/* 
참고 1)
Array.prototype.sort([compareFunction])
- 배열의 요소를 정렬
- 원본 배열 직접 변경, 정렬된 배열 반환
- 기본적으로 오름차순 정렬, 내림차순 정렬은 sort 후 reverse 메서드 사용
- compareFunction (optional) :
    - 정렬 순서를 정의하는 *비교함수*를 인수로 전달할 수 있다
    - 비교함수는 다음과 같이 구현되어 있다 :
        compareFn(a, b) return value	    sort order
        > 0	                                sort a after b, e.g. [b, a]
        < 0	                                sort a before b, e.g. [a, b]
        === 0	                            keep original order of a and b

*주의할 점*
기본적으로 오름차순 정렬이라고 했는데, 이때 정렬 기준은 각 요소의 유니코드 코드포인트 값이다.
즉, 정렬할 때 각 요소들은 암묵적으로 일단 문자열로 변환되어 해당 문자의 유니코드 코드포인트 값을 기준으로 정렬된다.


참고 2)
단축 평가
    (1) 논리 연산자
    (2) 옵셔널 체이닝 연산자
    (3) null 병합 연산자 (nullish coalescing)

Falsy 값
    - false
    - undefined
    - null
    - 0, -0
    - NaN
    - ''(빈 문자열)
*/
