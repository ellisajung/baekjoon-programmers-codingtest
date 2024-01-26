/* 
저주의 숫자 3

Description
3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 
3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

10진법	3x 마을에서 쓰는 숫자	
1	   1                     
2	   2                      
3	   4                      
4	   5                      
5	   7                      
6      8	
7	   10
8	   11
9	   14
10     16

정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100

입출력 예
n	result
15	25
40	76 
*/

// // 풀이 1
// // 길이가 n인 배열 생성
// // 3과 3의 배수를 제외한 숫자로 채우기
// // 1,2,4,5,7,8,10,11,14...
// const solution = (n) => Array.from({ length: n }, (_,i) => {
// });

// 풀이 2
// 길이가 n일때까지
// 3과 3의 배수를 제외한 숫자 push
const solution = (n) => {
  const answer = [];
  let i = 1;
  while (answer.length <= n) {
    if (!/3/g.test("" + i) && i % 3) answer.push(i);
    i++;
  }
  console.log(answer, i);
  return answer[n - 1];
};
console.log(solution(15));
