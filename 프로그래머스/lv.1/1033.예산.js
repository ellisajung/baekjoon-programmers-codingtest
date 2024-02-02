/* 
Budget

Description
S company investigated the amount of money required to purchase items 
by the department to provide the necessary supplies for each department. 
But, buying all items is impossible due to the limit of the budget. 
Hence, the company tries to purchase items for as many departments as possible.

When buying items, the whole amount of money requested by the department 
should be provided. For example, for the department who requested 1,000 , 
the exact 1,000 should be provided, and less than 1,000 cannot be provided.

Given an array of requested money d and budget budget as a parameter, 
write a function solution to return the maximum number of departments 
that can be supplied.

Constraints
d is an array of money requested by each department, 
and its length (the number of all departments) is between 1 and 100.
Each element of d indicates money requested by each department, 
and requested money is a natural number less than 100,000.
budget represents the budget and is a natural number less than 10,000,000.

Examples
d	            budget	result
[1,3,2,5,4]	    9	    3
[2,2,3,3]	    10	    4 
*/

const solution = (d, budget) => {
  d = d.sort((a, b) => a - b);
  let answer = 0;
  while (answer <= budget) {
    for (let i = 0; i <= d.length; i++) answer += d[i];
  }
};
