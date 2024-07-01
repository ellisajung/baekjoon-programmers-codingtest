/* 
다음에 올 숫자

Description
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 
마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.

입출력 예
common	        result
[1, 2, 3, 4]	5
[2, 4, 8]	    16 
*/

// 풀이 1
// 등차인지 등비인지 확인 후
// 결과에 따라 마지막 항에 공차 더하거나 공비 곱하기
const solution = (common) => {
  const [a, b, c] = common;
  return b - a === c - b
    ? common[common.length - 1] + (b - a)
    : common[common.length - 1] * (b / a);
};

/* 
참고)

등차수열
    (1) 일반항 : a + d(n-1)
    (2) 합 : ∑(a + d(k-1)) = (a-d) + d∑k = (a-d) + d(n(n+1)/2)
    
등비수열
    (1) 일반항 : ar^(n-1)
    (2) 합 :
            (i) r ≠ 1, a(r^n-1)/(r-1)
            (ii) r = 1, na

시그마(∑) 공식
    (1) ∑k   = n(n+1)/2
    (2) ∑k^2 = n(n+1)(2n+1)/6
    (3) ∑K^3 = {n(n+1)/2}^2

*/
