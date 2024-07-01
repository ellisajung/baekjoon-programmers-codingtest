/* 
로그인 성공?

Description
머쓱이는 프로그래머스에 로그인하려고 합니다. 
머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴
2차원 배열 db가 주어질 때, 다음과 같이 로그인 성공, 실패에 따른 메시지를 
return하도록 solution 함수를 완성해주세요.

아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 
아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

제한사항
회원들의 아이디는 문자열입니다.
회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
회원들의 패스워드는 숫자로 구성된 문자열입니다.
회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
id_pw의 길이는 2입니다.
id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
1 ≤ 아이디의 길이 ≤ 15
1 ≤ 비밀번호의 길이 ≤ 6
1 ≤ db의 길이 ≤ 10
db의 원소의 길이는 2입니다.

입출력 예
id_pw	                    db	                                                                                result
["meosseugi", "1234"]	    [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]	                    "login"
["programmer01", "15789"]	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]	    "wrong pw"
["rabbit04", "98761"]   	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]]	            "fail" 
*/

// // 풀이 1
// // 참조 타입 일치 비교 주의
// const solution = (id_pw, db) =>
//   db.find((user) => user[0] === id_pw[0])
//     ? db.find((user) => user[0] === id_pw[0] && user[1] === id_pw[1])
//       ? "login"
//       : "wrong pw"
//     : "fail";
// console.log(
//   solution(
//     ["meosseugi", "1234"],
//     [(["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"])]
//   )
// );

// 풀이 2
// Map 객체 사용
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const map = new Map(db);
  console.log(map); // Map(3) { 'rardss' => '123', 'yyoom' => '1234', 'meosseugi' => '1234' }
  console.log(map.has(id)); // true
  console.log(map.has(pw)); // false
  return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}
solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);

/* 
참고)

Set
// 중복되지 않는 값들의 집합
// new Set(이터러블)
// new Set([1,2,3]) // Set(3) {1,2,3}

    (1) 프로퍼티, 메서드
        Set.prototype.size - 요소 개수 확인
      * Set.prototype.add - 요소 추가
        Set.prototype.has - 요소 존재 여부 확인
        Set.prototype.delete - 요소 삭제
        Set.prototype.clear - 요소 일괄 삭제
        Set.prototype.forEach - 요소 순회
    (2) 빌트인 이터러블 - for...of문, 스프레드 문법, 배열 디스트럭처링
    (3) 집합 연산 구현 가능

Map 
// 키와 벨류 쌍으로 이루어진 컬렉션
// new Map(이터러블)
// new Map([['key1', 'value1'], ['key2', 'value2']]) // Map(2) {"key1"=>"value", "key2"=>"value2"}

    (1) 프로퍼티, 메서드
        Map.prototype.size - 요소 개수 확인
      * Map.prototype.set - 요소 추가
      * Map.prototype.get - 요소 취득 (키에 해당하는 벨류 반환)
        Map.prototype.has - 요소 존재 여부 확인 (키로 검색!!)
        Map.prototype.delete - 요소 삭제
        Map.prototype.clear - 요소 일괄 삭제
        Map.prototype.forEach - 요소 순회
        Map.prototype.get - 요소 존재 여부 확인
    (2) 빌트인 이터러블 - for...of문, 스프레드 문법, 배열 디스트럭처링
 ***(3) 이터러블이면서 이터레이터인 객체를 반환하는 메서드 제공
        Map.prototype.keys 
        Map.prototype.values
        Map.prototype.entries

*/
