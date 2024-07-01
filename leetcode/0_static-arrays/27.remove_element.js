// /*
// remove element

// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.

// Return k.

// Custom Judge:

// The judge will test your solution with the following code:

//     int[] nums = [...]; // Input array
//     int val = ...; // Value to remove
//     int[] expectedNums = [...]; // The expected answer with correct length.
//                                 // It is sorted with no values equaling val.

//     int k = removeElement(nums, val); // Calls your implementation

//     assert k == expectedNums.length;
//     sort(nums, 0, k); // Sort the first k elements of nums
//     for (int i = 0; i < actualLength; i++) {
//         assert nums[i] == expectedNums[i];
//     }

// If all assertions pass, then your solution will be accepted.

// Example 1:

//     Input: nums = [3,2,2,3], val = 3
//     Output: 2, nums = [2,2,_,_]
//     Explanation: Your function should return k = 2, with the first two elements of nums being 2.
//     It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

//     Input: nums = [0,1,2,2,3,0,4,2], val = 2
//     Output: 5, nums = [0,1,4,0,3,_,_,_]
//     Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
//     Note that the five elements can be returned in any order.
//     It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:

// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

// */

// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,_,_]

// // // 풀이 1 "오답" - delete 연산자, 희소배열 length 제대로 이해하기
// // // 순회하며 값 체크
// // // 같을 경우 delete
// // const removeElement = (nums, val) => {
// //   for (let num of nums) {
// //     if (num === val) delete num;
// //   }
// //   console.log(nums);
// //   return nums.length;
// // };

// // // 풀이 1 "정정" - 문제 요구사항 제대로 이해하기...
// // // 순회하며 값 체크
// // // 같을 경우 delete
// // const removeElement = (nums, val) => {
// //   let count = nums.length;
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] === val) {
// //       delete nums[i];
// //       count--;
// //     }
// //   }
// //   // console.log(nums);
// //   return count;
// // };

// // 풀이 1 "정정-정정" - 하... 모르겠다
// const removeElement = (nums, val) => {
//   let pt = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       delete nums[i];
//     } else {
//       // nums[pt] = nums[i];
//       // delete nums[i];
//       pt++;
//       // 희소배열 되기 전에는(첫번째 값 아님 주의) 포인터만 증가시키면 되는데
//       // 문제는 희소배열 된 후 등장하는 다른 값의 처리
//     }
//     console.log(nums);
//   }
//   return pt;
// };

// // 풀이 2
// const removeElement = (nums, val) => {
//   let [lp, rp] = [0, 0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       delete nums[i];
//     } else {
//       // nums[pt] = nums[i];
//       // delete nums[i];
//       pt++;
//       // 희소배열 되기 전에는(첫번째 값 아님 주의) 포인터만 증가시키면 되는데
//       // 문제는 희소배열 된 후 등장하는 다른 값의 처리
//     }
//     console.log(nums);
//   }
//   return pt;
// };

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(removeElement([3, 2, 2, 3], 3));

// // Neetcode 풀이
// /**
//  * Time O(N) | Space O(1)
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function (nums, val) {
//   let ptr1 = nums.length - 2;
//   let ptr2 = nums.length - 1;

//   if (!nums) return 0;
//   if (nums.length === 1) {
//     if (nums[0] === val) return 0;
//     return 1;
//   }

//   while (ptr1 > -1) {
//     if (nums[ptr2] === val) {
//       ptr2--;

//       while (nums[ptr1] === val) {
//         ptr2--;
//         ptr1--;
//       }
//     } else if (nums[ptr1] === val) {
//       let temp = nums[ptr1];
//       nums[ptr1] = nums[ptr2];
//       nums[ptr2] = temp;
//       ptr2--;
//     }

//     ptr1--;
//   }

//   return ptr2 + 1;
// };

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       // i--;
//     }
//     // console.log(i, nums);
//   }
//   return nums.length;
// };
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
let i = 0;
for (i = 0; i < 5; i++) {
  console.log(i); // 4
}
console.log(i); // 5

/* 
Notes

1. delete 연산자


2. 희소배열 length

*/
