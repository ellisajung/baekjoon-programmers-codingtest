/* 
구슬을 나누는 경우의 수

Description
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 
머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls

입출력 예
balls	share	result
3   	2   	3
5	    3	    10 
*/

// // 풀이 1 "오답"
// // 조합
// // 서로 다른 n개 중 m개를 뽑는 경우의 수: n!/((n-m)!*m!)
// const factorial = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// const solution = (balls, share) =>
//   factorial(balls) / (factorial(balls - share) * factorial(share));

// 풀이 1 "오답" 정정
// 자바스크립트에서 / 나눗셈 연산자 쓸 때 주의하기!!
const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const solution = (balls, share) => {
  const answer =
    factorial(balls) / (factorial(balls - share) * factorial(share));
  console.log(answer);
  // return Math.floor(answer) // Wrong!
  // return Math.ceil(answer) // Wrong!
  return Math.round(answer); // Correct! 참고 2.
};
console.log(solution(29, 25));
console.log(solution(15, 6));

/* 
참고 1.
팩토리얼 함수 구현하기

(1) 반복문 사용:
    function factorialIterative(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }

(2) reduce 함수를 사용한 방법:
    function factorialReduce(n) {
        return Array.from({ length: n }, (_, i) => i + 1)
                    .reduce((acc, cur) => acc * cur, 1);
    }
    
(3) (권장 X) 재귀 함수를 사용한 방법:
    function factorialRecursive(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorialRecursive(n - 1);
        }
    }


(4) (권장 X) 재귀 함수를 사용한 방법 (삼항 연산자 활용):
    function factorialTernary(n) {
        return n === 0 || n === 1 ? 1 : n * factorialTernary(n - 1);
    }

*주의할 점*
    재귀 함수를 사용하는 방법은 팩토리얼의 개념을 직관적으로 표현할 수 있지만, 
    큰 숫자에 대한 계산에서 스택 오버플로우의 가능성이 있음



참고 2.
경우의 수인데 내림(floor)이 아닌 반올림(round) 해야되는 이유
링크) https://joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98

참고 3.
Javascript 수학 라이브러리
    Big.js
    BigNumber.js
    Decimal.js
    mathjs
*/
