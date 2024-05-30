/* 
26.remove_duplicates_from_sorted_array

Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
you need to do the following things:

- Change the array nums such that the first k elements of nums contain the unique elements 
in the order they were present in nums initially. 
he remaining elements of nums are not important as well as the size of nums.

- Return k.

Custom Judge:
The judge will test your solution with the following code:
    int[] nums = [...]; // Input array
    int[] expectedNums = [...]; // The expected answer with correct length
    int k = removeDuplicates(nums); // Calls your implementation
    assert k == expectedNums.length;
    for (int i = 0; i < k; i++) {
        assert nums[i] == expectedNums[i];
    }
    If all assertions pass, then your solution will be accepted.

Example 1:
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

- 1 <= nums.length <= 3 * 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.
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

/* 
Notes

1.pop()과 같은 메서드 또는 delete 사용시 희소배열 만드는지?
2.배열의 length 프로퍼티는 유효한 값만 세는지?
  // const num = [1, , 2, 3];
  // console.log(num.length); // 4

*/
