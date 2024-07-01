/* 
공 던지기

Description
머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 
공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 
친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

제한사항
2 < numbers의 길이 < 100
0 < k < 1,000
numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.

입출력 예
numbers	            k	result
[1, 2, 3, 4]	    2	3
[1, 2, 3, 4, 5, 6]	5	3
[1, 2, 3]	        3	2 
*/

// // 풀이 1 "오답"
// // 홀수
// // [1,2,3,4,5,6,7,8,9] // 2n-1=9(길이) // n=(길이+1)/2
// // [1,3,5,7,9] // n=5
// // k=9 // k%5=4 // k%((길이+1)/2)
// // 2*4-1=7
// // 짝수
// // [1,2,3,4,5,6,7,8]
// // [1,3,5,7,2,4,6,8]
// // k=15 // k%8(길이)=7 //
// const solution = (numbers, k) => {
//   const len = numbers.length;
//   const arr1 = Array.from({ length: Math.ceil(len / 2) }, (_, i) => 2 * i + 1);
//   console.log(arr1);
//   const arr2 = Array.from({ length: len / 2 }, (_, i) => 2 * i + 2);
//   console.log(arr2);
//   const arr3 = [...arr1, ...arr2];
//   console.log(arr3);
//   return len % 2 === 0
//     ? arr3[k < len ? k - 1 : (k % len) - 1]
//     : arr1[k < arr1.length ? k - 1 : (k % arr1.length) - 1];
// };

// console.log(solution([1, 2, 3, 4], 2));

// // 풀이 2 "오답"
// // [1,2,3,4] 1번 복사, 3번째 = k*2-1
// // [1,2,3,4,5,6,1,2,3,4,5,6] 2번 복사, 9번째 = k*2-1
// // [1,2,3,1,2,3] 2번 복사, 5번째 = k*2-1
// // 필요한 만큼 n번 복사 후 // numbers.length*n > k*2-1 // n = Math.ceil((k*2-1)/len)
// // k*2-1번째(k*2-2 인덱스) 요소 반환
// const solution = (numbers, k) => {
//     const len = numbers.length;
//     const num = numbers.join("").repeat(Math.ceil((k * 2 - 1) / len))[k * 2 - 2];
//     return Number(num);
//   };
//   console.log(solution([1, 2, 3, 4, 5, 6], 5));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 9));
// 바보냐?

// 풀이 2 "오답" 정정
const solution = (numbers, k) => {
  const arr = [...numbers];
  let count = 1;
  while (numbers.length * count < k * 2 - 1) {
    arr.push(...numbers);
    console.log(arr);
    count++;
  }
  return arr[k * 2 - 2];
};
console.log(solution([1, 2, 3], 3));

// 풀이 3
const solution = (numbers, k) => numbers[(2 * (k - 1)) % numbers.length];
