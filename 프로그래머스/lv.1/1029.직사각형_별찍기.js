/* 
직사각형 별찍기

Description
※ Use Standrad input and output to solve this challenge
Print a n by m grid of asterisks.

Constrratins
The first line contains 2-separated integers, n and m.

1 ≤ n, m ≤ 1,000

Examples
Input
5 3

Output
*****
*****
***** 
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let count = 0;
  while (count < b) {
    console.log("*".repeat(a));
    count++;
  }
});
