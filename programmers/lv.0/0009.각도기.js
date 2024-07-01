/* 
각도기

Description
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 
90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 
둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

예각 : 0 < angle < 90
직각 : angle = 90
둔각 : 90 < angle < 180
평각 : angle = 180

제한사항
0 < angle ≤ 180
angle은 정수입니다.

입출력 예
angle	  result
70  	  1
91	    3
180	    4 
*/

// 풀이 1
// 함수 선언문과 if...else if문
function solution(angle) {
  let answer = 0; //불필요하므로 삭제

  // 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능
  if (0 < angle && angle < 90) {
    answer = 1;
  } else if (angle === 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle === 180) {
    answer = 4;
  }

  return answer;
}

// 풀이 2
// 삼항 연산자
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 풀이 3
// Array.prototype.filter() 배열 고차 함수
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
// 위 함수롤 화살표 함수 표현식으로
const solution = (angle) => [0, 90, 91, 180].filter((x) => angle >= x).length;
