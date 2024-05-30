/* 
A Correct Parenthesis

Description
The definition of correctly paired parentheses means that if it is 
opened with a '(' character, it must be closed with a ')' character.

For instance,

    "()()" or "(())()" is a correct parenthesis.
    ")()(" or "(()(" is an incorrect parenthesis.

Given a string s consisting only of '(' or ')', 
complete a solution function that returns true if the string s 
is the correct parenthesis and false if it is not.

Constraints
Length of string s: natural number less than 100,000
The string s consists of only '(' or ')'.

Example
s	        answer
"()()"	    true
"(())()"	true
")()("	    false
"(()("	    false 
*/

// // 풀이 1 "오답"
// // )로 시작하거나, (로 끝나거나, length가 홀수면 무조건 false
// // 순회하며 스택에 푸쉬
// // 순회 중인 인덱스가 스택의 마지막 포인터와 반대되면
// // 마지막 날리고, 푸쉬도 안함
// // 순회가 끝났을 때 스택에 남아있는 요소가 있으면 false, 없으면 true
// const solution = (s) => {
//   if (s[0] === ")" || s[s.length - 1] === "(" || s.length % 2 === 1)
//     return false;
//   const s_copy = ["("];
//   for (let i = 1; i < s.length; i++) {
//     s[i] === s_copy[i - 1] ? s_copy.push(s[i]) : s_copy.pop();
//   }
//   return s_copy.length ? false : true;
// };

/* 
채점을 시작합니다.
정확성  테스트
Test 1 〉	통과 (0.04ms, 33.5MB)
Test 2 〉	통과 (0.04ms, 33.5MB)
Test 3 〉	통과 (0.04ms, 33.4MB)
Test 4 〉	통과 (0.08ms, 33.5MB)
Test 5 〉	실패 (0.05ms, 33.4MB)
Test 6 〉	통과 (0.04ms, 33.4MB)
Test 7 〉	통과 (0.05ms, 33.4MB)
Test 8 〉	통과 (0.05ms, 33.4MB)
Test 9 〉	통과 (0.05ms, 33.4MB)
Test 10 〉	통과 (0.05ms, 33.5MB)
Test 11 〉	실패 (0.06ms, 33.6MB)
Test 12 〉	통과 (0.20ms, 33.4MB)
Test 13 〉	통과 (0.14ms, 33.5MB)
Test 14 〉	통과 (0.14ms, 33.3MB)
Test 15 〉	통과 (0.14ms, 33.4MB)
Test 16 〉	통과 (0.24ms, 33.5MB)
Test 17 〉	통과 (0.04ms, 33.4MB)
Test 18 〉	통과 (0.04ms, 33.5MB)
효율성  테스트
Test 1 〉	통과 (3.73ms, 37MB)
Test 2 〉	실패 (3.34ms, 37.1MB)
Submission result
정확성: 61.8
효율성: 15.2
Total score: 77.0 / 100.0 
*/

// // 풀이 2 "오답"
// // 풀이 1에서 스택이 비어있는 경우 고려 안함...
// const solution = (s) => {
//   if (s[0] === ")" || s[s.length - 1] === "(" || s.length % 2 === 1)
//     return false;
//   const s_copy = ["("];
//   for (let i = 1; i < s.length; i++) {
//     s[i] === s_copy[s_copy.length - 1] || !s_copy.length
//       ? s_copy.push(s[i])
//       : s_copy.pop();
//     console.log(s_copy);
//   }
//   return s_copy.length ? false : true;
// };

/* 
정확성  테스트
Test 1 〉	통과 (0.05ms, 33.6MB)
Test 2 〉	통과 (0.04ms, 33.6MB)
Test 3 〉	통과 (0.06ms, 33.7MB)
Test 4 〉	통과 (0.06ms, 33.5MB)
Test 5 〉	실패 (0.06ms, 33.5MB)
Test 6 〉	통과 (0.04ms, 33.5MB)
Test 7 〉	통과 (0.08ms, 33.6MB)
Test 8 〉	통과 (0.06ms, 33.5MB)
Test 9 〉	통과 (0.22ms, 33.5MB)
Test 10 〉	통과 (0.06ms, 33.5MB)
Test 11 〉	실패 (0.06ms, 33.5MB)
Test 12 〉	통과 (0.15ms, 33.6MB)
Test 13 〉	통과 (0.18ms, 33.5MB)
Test 14 〉	통과 (0.15ms, 33.5MB)
Test 15 〉	통과 (0.15ms, 33.6MB)
Test 16 〉	통과 (0.17ms, 33.6MB)
Test 17 〉	통과 (0.05ms, 33.5MB)
Test 18 〉	통과 (0.04ms, 33.5MB)
효율성  테스트
Test 1 〉	통과 (27.67ms, 37.2MB)
Test 2 〉	통과 (5.80ms, 37.8MB)
Submission result
정확성: 61.8
효율성: 30.5
Total score: 92.3 / 100.0 
*/

// 풀이 3
// )(도 pop시켜버림
const solution = (s) => {
  if (s[0] === ")" || s[s.length - 1] === "(" || s.length % 2 === 1)
    return false;
  const s_copy = ["("];
  for (let i = 1; i < s.length; i++) {
    s_copy[s_copy.length - 1] + s[i] === "()"
      ? s_copy.pop()
      : s_copy.push(s[i]);
    console.log(s_copy);
  }
  return s_copy.length ? false : true;
};

console.log(solution("())(()"));

/* 
채점을 시작합니다.
정확성  테스트
Test 1 〉	통과 (0.05ms, 33.5MB)
Test 2 〉	통과 (0.04ms, 33.6MB)
Test 3 〉	통과 (0.04ms, 33.5MB)
Test 4 〉	통과 (0.07ms, 33.6MB)
Test 5 〉	통과 (0.05ms, 33.5MB)
Test 6 〉	통과 (0.04ms, 33.4MB)
Test 7 〉	통과 (0.05ms, 33.6MB)
Test 8 〉	통과 (0.05ms, 33.5MB)
Test 9 〉	통과 (0.19ms, 33.5MB)
Test 10 〉	통과 (0.06ms, 33.5MB)
Test 11 〉	통과 (0.05ms, 33.5MB)
Test 12 〉	통과 (0.15ms, 33.6MB)
Test 13 〉	통과 (0.15ms, 33.5MB)
Test 14 〉	통과 (0.15ms, 33.4MB)
Test 15 〉	통과 (0.20ms, 33.5MB)
Test 16 〉	통과 (0.16ms, 33.5MB)
Test 17 〉	통과 (0.05ms, 33.1MB)
Test 18 〉	통과 (0.05ms, 33.3MB)
효율성  테스트
Test 1 〉	통과 (7.51ms, 38.7MB)
Test 2 〉	통과 (7.88ms, 38.6MB)
Submission result
정확성: 69.5
효율성: 30.5
Total score: 100.0 / 100.0
*/
