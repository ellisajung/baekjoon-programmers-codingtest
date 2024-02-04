/* 
2016년

Description
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 

SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

입출력 예
a	b	result
5	24	"TUE" 
*/

// // 풀이 1 "오답"
// // 금요일 인덱스 + 일수 차이 % 7
// // 일수 차이 = 월별 일수 배열의 a-1달(a-2인덱스)까지의 합 + b
// const solution = (a, b) => {
//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let dayGap = b;
//   for (let i = 0; i <= a - 2; i++) {
//     dayGap += daysOfMonths[i];
//   }
//   return daysOfWeek[5 + (b % 7)];
// };

// 풀이 1 "오답" 정정
const solution = (a, b) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayGap = b - 1; // b 아님 주의
  // 조건 추가
  if (a !== 1) {
    for (let i = 0; i <= a - 2; i++) {
      dayGap += daysOfMonths[i];
    }
  }
  //   console.log(dayGap, 5 + (dayGap % 7)); // 145 10
  return daysOfWeek[(5 + dayGap) % 7];
};

console.log(solution(5, 24));

// 풀이 1 최적화
// 금요일 인덱스 더해줄 필요 없이 금요일부터 배열 시작
const solution = (a, b) => {
  const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayGap = b - 1; // b일 경우 목요일부터 배열 시작
  if (a !== 1) {
    for (let i = 0; i <= a - 2; i++) {
      dayGap += daysOfMonths[i];
    }
  }
  return daysOfWeek[dayGap % 7];
};

// 풀이 3
// for문 대신 slice, reduce 사용 // 성능은 더 안좋음...
// (금요일 인덱스 + 일수 차이) % 7
// 일수 차이 = 월별 일수 배열의 a-1달(a-2인덱스)까지의 합 + b
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const daysOfMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const solution = (a, b) => {
  const dayGap =
    b -
    1 +
    (a !== 1
      ? daysOfMonths.slice(0, a - 1).reduce((acc, days) => acc + days, 0)
      : 0);
  return daysOfWeek[(5 + dayGap) % 7];
};
