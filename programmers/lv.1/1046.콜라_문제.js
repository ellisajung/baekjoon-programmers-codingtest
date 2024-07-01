/* 
콜라 문제

Description
오래전 유행했던 콜라 문제가 있습니다. 콜라 문제의 지문은 다음과 같습니다.

    정답은 아무에게도 말하지 마세요.
    콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다. 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?
    단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다.

문제를 풀던 상빈이는 콜라 문제의 완벽한 해답을 찾았습니다. 상빈이가 푼 방법은 아래 그림과 같습니다. 
우선 콜라 빈 병 20병을 가져가서 10병을 받습니다. 받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다. 
5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다. 
받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다. 
이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.

https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/95ce1c11-2f21-4248-8bfc-e330299cbb9a/image6.PNG

문제를 열심히 풀던 상빈이는 일반화된 콜라 문제를 생각했습니다. 
이 문제는 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 
빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 
기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 
상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 
상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요.

콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 
상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다. 
상빈이가 받을 수 있는 콜라의 병 수를 return 하도록 solution 함수를 작성해주세요.

제한사항
1 ≤ b < a ≤ n ≤ 1,000,000
정답은 항상 int 범위를 넘지 않게 주어집니다.

입출력 예
a	b	n	result
2	1	20	19
3	1	20	9 
*/

// // 풀이 1 "오답" **무한루프 주의 (자주 하는 실수)**
// // 10(= 20/2*1) + 5(= 10/2*1 + 0) + 3(= 5/2*1 + 5%2) + 1(= 3/2*1) = 19
// // n = Math.floor(n/a*b) + n%a >= a
// const solution = (a, b, n) => {
//   let answer = 0;
//   let bottle = Math.floor((n / a) * b) + (n % a); // 이 시점에서 bottle은 평가되어 하나의 값이 할당됨
//   while (bottle >= a) {
//     answer += bottle;
//     // 따라서, 여기서 n에 재할당해도 위 bottle 값과 무관함
//     // 따라서, bottle 값이 변함없으므로 무한루프에 빠짐
//     n = bottle;
//     console.log(answer, bottle, n);
//   }
//   return answer;
// };

// console.log(solution(2, 1, 20));

// // 풀이 1-1 정정 "오답"
// // 10(= 20/2*1) + 5(= 10/2*1 + 0) + 3(= 5/2*1 + 5%2) + 1(= 3/2*1) = 19
// // n = Math.floor(n/a*b) + n%a >= a
// const solution = (a, b, n) => {
//   let answer = 0;
//   let bottle = Math.floor((n / a) * b) + (n % a);
//   while (bottle >= a) {
//     answer += bottle;
//     n = bottle;
//     bottle = Math.floor((n / a) * b) + (n % a);
//     console.log(answer, bottle, n);
//   }
//   return answer - bottle;
// };

// // 풀이 1-2 정정 및 최적화
// // 식 수정, 불필요한 변수 삭제
// // 받는거 = (있는거 / a) * b
// // 있는거 = 받은거 + (있는거 % a)
// const solution = (a, b, n) => {
//   let answer = 0;
//   while (n >= a) {
//     const bottles = Math.floor(n / a) * b;
//     answer += bottles;
//     n = bottles + (n % a);
//     console.log(answer, n);
//   }
//   return answer;
// };

// 풀이 2
/* 
전부 다 바꾸지 말고 a병씩 바꾼다고 생각!!
1) x회 교환
2) 받는 총 빈병의 수

1회 교환 : n - a + b = n - (a-b)
2회 교환 : n - (a-b) * 2
...
x회 교환 : n - (a-b) * x (x는 자연수)

이때 n - (a-b) * (x-1) >= a 를 만족할 때까지 교환할 수 있으므로(해당식을 만족하면 x회 교환),
x는 x <= (n-b) / (a-b) 를 만족하는 최대 자연수 (a-b ≠ 0)이고
구하고자 하는 받은 총 빈병의 개수는 b*x
*/
const solution = (a, b, n) => b * Math.floor((n - b) / (a - b));
console.log(solution(2, 1, 20));

// // 풀이 3 이해 안감...
// const solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
// // 풀이 링크) https://blog.naver.com/doctorgu/222992407249
