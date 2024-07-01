/* 
가운데 글자 가져오기

Description
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

입출력 예
s	        return
"abcde"	    "c"
"qwer"	    "we" 
*/

// 풀이 1
// String.prototype.slice(indexStart, indexEnd) - indexEnd 미포함
// String.prototype.slice(negativeIndex) - 끝에서 몇자리
const solution = (s) =>
  s.length % 2
    ? s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2))
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
