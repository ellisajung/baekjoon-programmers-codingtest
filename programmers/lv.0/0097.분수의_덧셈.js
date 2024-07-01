/* 
분수의 덧셈

Description
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 
return 하도록 solution 함수를 완성해보세요.

제한사항
0 <numer1, denom1, numer2, denom2 < 1,000

입출력 예
numer1	denom1	numer2	denom2	result
1	    2	    3   	4	    [5, 4]
9	    2	    1   	3	    [29, 6] 
*/

// // 풀이 1 "오답"
// // d1, d2의 최소공배수
// // n1, n2에 각각 최소공배수를 d1으로 나눈 수, d2로 나눈 수 곱해주기
// // [n1+n2, 최소공배수]
// const solution = (numer1, denom1, numer2, denom2) => {
//   // 최소공배수
//   // 두 수 중 큰수/작은수 했을 때, 기약분수로 만든 다음, 분자 * 분모에 남은 숫자
//   // 즉, 두 수를 곱한 후 최대공약수로 나눈 숫자
//   let fac = 1;
//   for (let i = 1; i <= Math.min(denom1, denom2); i++) {
//     if (!(denom1 % i) && !(denom2 % i)) fac = i;
//   }
//   const mul = (denom1 * denom2) / fac;
//   numer1 = numer1 * (mul / denom1);
//   numer2 = numer2 * (mul / denom2);
//   return [numer1 + numer2, mul];
// };

// 풀이 1 "오답" 정정
// 마지막 약분 잊지 말기!!!
const solution = (numer1, denom1, numer2, denom2) => {
  let fac1 = 1;
  for (let i = 1; i <= Math.min(denom1, denom2); i++) {
    if (!(denom1 % i) && !(denom2 % i)) fac1 = i;
  }
  const mul = (denom1 * denom2) / fac1;
  numer1 = numer1 * (mul / denom1);
  numer2 = numer2 * (mul / denom2);
  let fac2 = 1;
  for (let i = 1; i <= Math.min(numer1 + numer2, mul); i++) {
    if (!((numer1 + numer2) % i) && !(mul % i)) fac2 = i;
  }
  return [(numer1 + numer2) / fac2, mul / fac2];
};

console.log(solution(1, 2, 3, 10));

// 풀이 1 최적화
// 반복하는 로직은 함수로 만들기
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}

/* 
참고)

최대공약수 구하기

    (1) for문 사용 :
        funciont solution(num1, num2) {
            let fac = 1;
            for (let i = 1; i <= Math.min(num1, num2); i++) {
            if (!(num1 % i) && !(num2 % i)) fac = i;
            }
            return fac
        }
    (2) 재귀함수 사용 :
        function solution(num1, num2) {
        return num1 % num2 ? solution(num2, num1 % num2) : num2;
        } 

최소공배수 구하기
// 두 수를 곱한 후 최대공약수로 나누기

*/
