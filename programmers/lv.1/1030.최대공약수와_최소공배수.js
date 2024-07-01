/* 
최대공약수와 최소공배수

Description
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.

입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10] 
*/

// 최대공약수
// for문 사용
const greatestComDiv = (a, b) => {
  let div = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (!(a % i) && !(b % i)) div = i;
  }
  return div;
};

// 최대공약수
// 재귀함수 사용 - 유클리드 호제법(*두 정수*의 최대공약수)
const greatestComDiv = (a, b) => (b ? greatestComDiv(b, a % b) : a);

// 풀이 1
const solution = (n, m) => [
  greatestComDiv(n, m),
  (n * m) / greatestComDiv(n, m),
];

// // 풀이 2 **참고**
// function gcdlcm(a, b) {
//     var r;
//     for(var ab= a*b;r = a % b;a = b, b = r){}
//     return [b, ab/b];
// }
// 이해 안감...
