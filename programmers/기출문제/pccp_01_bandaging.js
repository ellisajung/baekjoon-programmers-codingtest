/* 
Description

In a certain game, there is a skill called Bandaging.
Bandaging involves wrapping bandages for t seconds, healing x health points every second. If you successfully wrap the bandages continuously for t seconds, you gain an additional y health points. The character in the game has a maximum health limit that cannot be exceeded.
While using the skill, if the character is attacked by a monster, the skill is canceled, and health cannot be restored at the moment of the attack. Once the skill ends or is canceled due to an attack, the character immediately uses Bandaging again, and the consecutive success time is reset to 0.
When attacked by a monster, the character's health decreases by the amount of damage. If the current health falls below or equals 0, the character dies, and health cannot be restored anymore.
You are curious whether the character can survive until the end given the information about the Bandaging skill, the maximum health of the character, and the monster's attack pattern.
You are given a one-dimensional integer array bandage containing the casting time, healing per second, and additional healing of the Bandaging skill, an integer health representing the maximum health, and a two-dimensional integer array attacks containing the attack time and damage of the monster's attacks as parameters. Complete the solution function to return the remaining health points after all attacks. If the character's health falls below or equals 0 due to a monster's attack and dies, return -1.

Limitations
bandage is an integer array of length 3 in the form of [casting time, healing per second, additional healing].
1 ≤ Casting time = t ≤ 50
1 ≤ Healing per second = x ≤ 100
1 ≤ Additional healing = y ≤ 100
1 ≤ health ≤ 1,000
1 ≤ Length of attacks ≤ 100
attacks[i] is an integer array of length 2 in the form of [attack time, damage].
attacks is sorted in ascending order based on the attack time.
All attack times in attacks are distinct.
1 ≤ attack time ≤ 1,000
1 ≤ damage ≤ 100

Input/Output example
bandage	health	attacks	result
[5, 1, 5]	30	[[2, 10], [9, 15], [10, 5], [11, 5]]	5
[3, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
[4, 2, 7]	20	[[1, 15], [5, 16], [8, 6]]	-1
[1, 1, 1]	5	[[1, 2], [3, 2]]	3

Explanation
Input/Output example #1

The monster's final attack occurs at 11 seconds. The character's status from 0 to 11 seconds is as follows.

Time	Current health(Change)	Continuous success	Attack	    Description
0	    30                    	0                   X	        Initial state
1	    30(+0)	                1	                X	        The character cannot have more health than the maximum health.
2	    20(-10)	                0	                O	        Continuous success is reset due to the monster's attack.
3	    21(+1)	                1	                X	        
4	    22(+1)	                2	                X	        
5	    23(+1)	                3	                X	        
6	    24(+1)	                4	                X	        
7	    30(+6)	                5 → 0	            X	        After succeeding for 5 seconds consecutively, the character gains 5 health and the consecutive success is reset.
8	    30(+0)	                1	                X	        The character cannot have more health than the maximum health.
9	    15(-15)	                0	                O	        Continuous success is reset due to the monster's attack.
10	    10(-5)	                0	                O	        Continuous success is reset due to the monster's attack.
11	    5(-5)	                0	                O	        This is the monster's final attack.
The character's health after the monster's last attack is 5. Therefore, the function should return 5.

Input/Output example #2

The monster's final attack occurs at 8 seconds. The character's status from 0 to 8 seconds is as follows.

Time	Current health(Change)	Continuous success	Attack	Description
0	    20	                    0	                X	    Initial state
1	    5(-15)	                0	                O	    Continuous success is reset due to the monster's attack.
2	    7(+2)	                1	                X	    
3	    9(+2)	                2	                X	    
4	    18(+9)	                3 → 0	            X	    After succeeding for 3 seconds consecutively, the character gains 7 health and the consecutive success is reset.
5	    2(-16)	                0	                O	    Consecutive successes are reset due to the monster's attack.
6	    4(+2)	                1	                X	    
7	    6(+2)	                2	                X	    
8	    0(-6)	                0	                O	    The character's health falls below 0 after receiving the monster's final attack.
The character's health becomes 0 or less after being attacked by the monster. Therefore, the function should return -1.

Input/Output example #3

The monster's final attack occurs at 8 seconds. The character's status from 0 seconds to 5 seconds is as follows.

Time	Current health(Change)	Continuous success	Attack	Description
0	    20	                    0                  	X	    Initial state
1	    5(-15)	                0                  	O	    Continuous success is reset due to the monster's attack.
2	    7(+2)	                1                  	X	    
3	    9(+2)	                2                  	X	    
4	    11(+2)	                3                  	X	    
5	    -5(-16)	                0                  	O	    The character's health falls below 0 due to the monster's attack.
The character's health becomes 0 or less after being attacked by the monster. Therefore, the function should return -1.

Input/Output example #4

The monster's final attack occurs at 3 seconds. The character's status from 0 seconds to 3 seconds is as follows.

Time	Current health(Change)	Continuous success	Attack	Description
0	    5	                    0	                X	Initial state
1	    3(-2)	                0	                O	Continuous success is reset due to the monster's attack.
2	    5(+2)	                1 → 0              	X	After succeeding for 1 second consecutively, the character gains 1 health and the consecutive success is reset.
3	    3(-2)	                0                  	O	This is the monster's final attack.
After the monster's final attack, the character's health is 3. Therefore, the function should return -1.

 */

// 풀이 1

// // bandage = [5, 1, 5]
// // health = 30
// // attacks = [[2, 10], [9, 15], [10, 5], [11, 5]]
// // 5

// // 10, 25
// // 25-10-1 = 14
// //

// // attaks 순회하며

// // 첫번째 어택 ch
// // 첫번째 어택 시점 >= t
// // ch = ch + (첫번째 어택 시점-1)//t*(x+y) + (첫번째 어택 시점-1)%t*x
// // ch = ch - 현어택 크기
// // 첫번째 어택 시점 < t
// // ch = ch + (첫번째 어택 시점-1)*x
// // ch = ch - 현어택 크기
// // 틀림

// // 첫번째 어택 전까지 체력 회복력은 0 =>최대 체력량을 넘을 수 없기 때문

// // 두번째 이상 어택 ch
// // 현어택 시점-전어택 시점-1 >= t
// // ch = ch + (현어택 시점-전어택 시점-1)//t*(x+y) + (현어택 시점-전어택 시점-1)%t*x
// // ch = ch - 현어택 크기
// // 현어택 시점-전어택 시점-1 < t
// // (현어택 시점-전어택 시점-1)*x
// // ch = ch - 현어택 크기

// const solution = (bandage, health, attacks) => {
//   const [t, x, y] = bandage;
//   let ch = health;
//   console.log(ch);

//   attacks.forEach((e, i) => {
//     if (i === 0) {
//       ch = ch - e[1];
//     } else {
//       if (e[0] - attacks[i - 1][0] - 1 >= t) {
//         ch =
//           ch +
//           Math.floor((e[0] - attacks[i - 1][0] - 1) / (t + 1)) * (t * x + y) +
//           ((e[0] - attacks[i - 1][0] - 1) % (t + 1)) * x -
//           e[1];
//       } else {
//         ch = ch + (e[0] - attacks[i - 1][0] - 1) * x - e[1];
//       }
//     }
//     console.log(e, ch);
//   });

//   return ch > 0 ? ch : -1;
// };

// console.log(
//   solution([5, 1, 5], 30, [
//     [2, 10],
//     [9, 15],
//     [10, 5],
//     [11, 5],
//   ])
// );
// console.log(
//   solution([1, 1, 1], 5, [
//     [1, 2],
//     [3, 2],
//   ])
// );

// 풀이 2 "오답"

// const solution = (bandage, health, attacks) => {
//   const [t, x, y] = bandage;
//   let cs = 0;
//   let ch = health;
//   let attacks_pt = 0;

//   for (
//     let time = attacks[attacks_pt][0];
//     time <= attacks[attacks.length - 1][0];
//     time++
//   ) {
//     if (time === attacks[attacks_pt][0]) {
//       cs = 0;
//       ch -= attacks[attacks_pt][1];
//       attacks_pt++;
//     } else {
//       cs++;
//       if (cs === t) {
//         cs = 0;
//         ch += x + y;
//         if (ch > health) {
//           ch = health;
//         }
//       } else {
//         ch += x;
//         if (ch > health) {
//           ch = health;
//         }
//       }
//     }
//     console.log(time, ch, cs);
//   }
//   return ch > 0 ? ch : -1;
// };

// console.log(
//   solution([5, 1, 5], 30, [
//     [2, 10],
//     [9, 15],
//     [10, 5],
//     [11, 5],
//   ])
// );

// console.log(
//   solution([1, 1, 1], 5, [
//     [1, 2],
//     [3, 2],
//   ])
// );

// 풀이 2 "정정"
// 중간에 죽는거 고려!! 소생하면 안되잖니

const solution = (bandage, health, attacks) => {
  const [t, x, y] = bandage;
  let cs = 0;
  let ch = health;
  let attacks_pt = 0;

  for (
    let time = attacks[attacks_pt][0];
    time <= attacks[attacks.length - 1][0];
    time++
  ) {
    if (time === attacks[attacks_pt][0]) {
      cs = 0;
      ch -= attacks[attacks_pt][1];
      attacks_pt++;
      if (ch <= 0) return -1;
    } else {
      cs++;
      if (cs === t) {
        cs = 0;
        ch += x + y;
        if (ch > health) {
          ch = health;
        }
      } else {
        ch += x;
        if (ch > health) {
          ch = health;
        }
      }
      if (ch <= 0) return -1;
    }
  }
  return ch;
};

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
);

console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);

/* 
정확성  테스트
Test 1 〉	통과 (0.07ms, 33.4MB)
Test 2 〉	통과 (0.17ms, 33.4MB)
Test 3 〉	통과 (0.18ms, 33.5MB)
Test 4 〉	통과 (0.07ms, 33.6MB)
Test 5 〉	통과 (0.08ms, 33.5MB)
Test 6 〉	통과 (0.06ms, 33.4MB)
Test 7 〉	통과 (0.17ms, 33.4MB)
Test 8 〉	통과 (0.16ms, 33.4MB)
Test 9 〉	통과 (0.19ms, 33.4MB)
Test 10 〉	통과 (0.16ms, 33.5MB)
Test 11 〉	통과 (0.22ms, 33.4MB)
Test 12 〉	통과 (0.31ms, 33.6MB)
Test 13 〉	통과 (0.21ms, 33.6MB)
Test 14 〉	통과 (0.25ms, 33.6MB)
Test 15 〉	통과 (0.22ms, 33.4MB)
Test 16 〉	통과 (0.19ms, 33.5MB)
Test 17 〉	통과 (0.24ms, 33.5MB)
Test 18 〉	통과 (0.22ms, 33.4MB)
Test 19 〉	통과 (0.23ms, 33.5MB)
Test 20 〉	통과 (0.25ms, 33.4MB)
Submission result
정확성: 100.0
Total score: 100.0 / 100.0
 */

// 다른사람풀이

function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
