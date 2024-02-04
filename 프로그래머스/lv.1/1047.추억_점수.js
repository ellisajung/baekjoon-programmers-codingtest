/* 
추억 점수

Description
사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 
사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 
예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 
각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 
다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 
["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, 
"tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 
각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 
사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ name의 길이 = yearning의 길이≤ 100
3 ≤ name의 원소의 길이 ≤ 7
name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
name에는 중복된 값이 들어가지 않습니다.
1 ≤ yearning[i] ≤ 100
yearning[i]는 i번째 사람의 그리움 점수입니다.
3 ≤ photo의 길이 ≤ 100
1 ≤ photo[i]의 길이 ≤ 100
3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
photo[i]의 원소들은 중복된 값이 들어가지 않습니다.

입출력 예
name                        	yearning	    photo                                                                                           	result
["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
["kali", "mari", "don"]	        [11, 1, 55] 	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	                        [67, 0, 55]
["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]                                              	[5, 15, 0] 
*/

// 풀이 1
// name 요소를 키로 yearning 요소를 벨류로 하는 *Map 객체* 생성
// photo 돌며 해당 값이 숫자인지 확인 - map 중첩하여 순회
// 맞으면 해당 숫자 반환
// 틀리면 0 반환
// reduce로 2차 배열 더하기
const solution = (name, yearning, photo) => {
  const map = new Map();
  for (let i = 0; i < name.length; i++) map.set(name[i], yearning[i]);
  console.log(map);
  return photo.map((v1) =>
    v1.map((v2) => map.get(v2) || 0).reduce((acc, cur) => acc + cur, 0)
  ); // v1 = ["may", "kein", "kain", "radi"]
};

// Test 1 〉	통과 (0.15ms, 33.5MB)
// Test 2 〉	통과 (0.16ms, 33.5MB)
// Test 3 〉	통과 (0.25ms, 33.5MB)
// Test 4 〉	통과 (0.19ms, 33.6MB)
// Test 5 〉	통과 (0.44ms, 33.6MB)
// Test 6 〉	통과 (0.71ms, 33.7MB)
// Test 7 〉	통과 (0.77ms, 33.8MB)
// Test 8 〉	통과 (0.71ms, 33.8MB)
// Test 9 〉	통과 (1.09ms, 33.7MB)
// Test 10 〉	통과 (1.14ms, 34MB)
// Test 11 〉	통과 (1.26ms, 34MB)
// Test 12 〉	통과 (0.98ms, 33.9MB)
// Test 13 〉	통과 (0.20ms, 33.5MB)
// Test 14 〉	통과 (0.08ms, 33.5MB)

// console.log(undefined ? 1 : 2); // 2

// const arr = new Map([
//   ["may", 1],
//   ["kein", 4],
// ]);
// console.log(arr.get("tony")); // undefined
// console.log(arr.get("may")); // 1

// 풀이 2 **성능은 풀이 1이 훨씬 좋음!!!**
// 불필요한 중첩 map 메서드 제거
// 중첩 map으로 점수로 변환 후 순회하며 reduce로 더해줄 필요 없이,
// 바로 reduce에서 점수를 더해주기
const solution = (name, yearning, photo) => {
  const map = new Map();
  for (let i = 0; i < name.length; i++) map.set(name[i], yearning[i]);
  console.log(map);
  return photo.map((v) => v.reduce((acc, cur) => acc + (map.get(cur) || 0), 0)); // v = ["may", "kein", "kain", "radi"]
};
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);

// Test 1 〉	통과 (3.23ms, 33.6MB)
// Test 2 〉	통과 (3.48ms, 33.6MB)
// Test 3 〉	통과 (3.18ms, 33.6MB)
// Test 4 〉	통과 (3.64ms, 33.6MB)
// Test 5 〉	통과 (3.83ms, 33.7MB)
// Test 6 〉	통과 (3.80ms, 33.9MB)
// Test 7 〉	통과 (5.43ms, 33.8MB)
// Test 8 〉	통과 (3.94ms, 33.7MB)
// Test 9 〉	통과 (4.13ms, 34MB)
// Test 10 〉	통과 (4.32ms, 34.1MB)
// Test 11 〉	통과 (4.50ms, 34MB)
// Test 12 〉	통과 (3.94ms, 33.9MB)
// Test 13 〉	통과 (3.35ms, 33.7MB)
// Test 14 〉	통과 (3.59ms, 33.5MB)

/* 
참고)

1)  키 배열과 벨류 배열로 일반객체 또는 Map객체 생성하기
    일반객체
        ① 빈 객체 생성
        ② 배열 순회하며 동적으로 요소 생성
    Map객체
        ① 빈 Map객체 생성
        ② 배열 순회하며 동적으로 요소 생성

2) 일반객체 vs Map객체

*/
