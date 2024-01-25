/* 
종이 자르기

Description
머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 
예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/37cec804-18c5-4c58-95fc-37b4d52e6e7f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-07-25%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.49.44.png

정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를
return 하도록 solution 함수를 완성해보세요.

제한사항
0 < M, N < 100
종이를 겹쳐서 자를 수 없습니다.

입출력 예
M	N	result
2	2	3
2	5	9
1	1	0 
*/

// M x N
// M-1 + M(N-1) = M*N-1
const solution = (M, N) => M * N - 1;
