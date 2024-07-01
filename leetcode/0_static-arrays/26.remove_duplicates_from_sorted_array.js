/*
26. Remove Duplicates from Sorted Array 

Notes

1.pop()과 같은 메서드 또는 delete 사용시 희소배열 만드는지?
2.배열의 length 프로퍼티는 유효한 값만 세는지?
  // const num = [1, , 2, 3];
  // console.log(num.length); // 4

*/

// 풀이 1
// for문
// 배열 순회하며 count 인덱스와 같은지 확인
// 같으면, delete
// 같지 않으면, (count 인덱스 + 1)에 값 저장하고 count++
const removeDuplicates = (nums) => {
  let count = 1; // 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[count - 1] === nums[i]) {
      // count
      delete nums[i]; // 굳이?
    } else {
      nums[count] = nums[i]; // count + 1
      delete nums[i];
      count++;
    }
    console.log(nums);
  }
  return count; // count + 1
};

// 풀이 2
// for of문 사용
const removeDuplicates = (nums) => {
  let count = 1; // 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[count - 1] === nums[i]) {
      // count
      delete nums[i]; // 굳이?
    } else {
      nums[count] = nums[i]; // count + 1
      delete nums[i];
      count++;
    }
    console.log(nums);
  }
  return count; // count + 1
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Neetcode 풀이
/**
 * Linear
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let [left, right] = [0, 0];
  while (right < nums.length) {
    const [leftVal, rightVal] = [nums[left], nums[right]];
    const isEqual = rightVal === leftVal;
    if (!isEqual) {
      left++;
      nums[left] = rightVal;
    }
    right++;
  }
  return left + 1;
};
