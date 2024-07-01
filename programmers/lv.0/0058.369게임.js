/* 
369게임

Description
머쓱이는 친구들과 369게임을 하고 있습니다. 
369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 
숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 
머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 
머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ order ≤ 1,000,000

입출력 예
order	result
3	    1
29423	2 
*/

// 풀이 1
// 문자열로 변환 후, 순회하며 더해주기
const solution = (order) => {
  const str_order = String(order);
  let answer = 0;
  for (let i = 0; i < str_order.length; i++) {
    // str_order[i] == 3 || 6 || 9 아님 주의
    if (str_order[i] == 3 || str_order[i] == 6 || str_order[i] == 9) answer++;
  }
  return answer;
};

// 풀이 1-1
// || 연산자 대신 includes() 사용
const solution = (order) => {
  const str_order = String(order);
  let answer = 0;
  for (let i = 0; i < str_order.length; i++) {
    // 암묵적 타입 변환 안됨 주의
    if ([3, 6, 9].includes(Number(str_order[i]))) answer++;
  }
  return answer;
};

// 풀이 2
// 정규표현식 & String.prototype.match()
// 3,6,9만 담은 배열 반환후 length 구하기
// ***ES11 옵셔널 체이닝 연산자 & null 병합 연산자
const solution = (order) => ("" + order).match(/[369]/g)?.length ?? 0;
console.log("1111".match(/[369]/g)); // null
console.log("1111".match(/[369]/g).length); // TypeError: Cannot read properties of null (reading 'length')
console.log("1111".match(/[369]/g).length ?? 0); // 따라서 이처럼 null 병합 연산자 사용 못함

// 풀이 3
// 위에 뭐한거임?^^
const solution = (order) => (order + "").replace(/[^369]/g, "").length;

/* 
참고 1
num이 3 또는 6 또는 9인지 확인하는 방법
(1) 논리합 연산자(||) - num == 3 || num == 6 || num == 9
    (!주의!) num == 3 || 6 || 9
            str == 3의 결과가 true이면 그 값이 반환되어 전체 표현식은 true가 되고,
            그렇지 않으면 6이나 9와 같이 값이 있는 부분이 참으로 간주되어
            전체 표현식은 항상 true가 됨
(2) Array.prototype.includes() - [3,6,9].includes(num)
(3) 정규표현식 - /[369]/g

참고 2
***ES11 주요 내용
(1) 옵셔널 체이닝 연산자
    연산자 ?. 좌항의 피연산자가 null 또는 undefined일 경우 undefined 반환, 
    그렇지 않으면 우항의 프로퍼티 참조 이어나감.
(2) null 병합 연산자 (null coalescing(컴퓨터공학에서 기억장치에서 공백의 처리에 관한 용어))
    연산자 ?? 좌항의 피연산자가 null 또는 undefined일 경우 우항의 피연산자 반환,
    그렇지 않으면 좌항의 피연산자 반환
 */
