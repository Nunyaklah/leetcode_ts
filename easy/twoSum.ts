/**
 *  Leetcode 1 - Two Sum
 * 
 *  Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]


 *  Solution Explanation :

    Map --> {Value : Index}

    We take the: target - num = result , and check if the result is in the map. If its not in the map we put the 
    number in the map with its index. If its in the map we return is value(index) and the index of the current iteration
    {
        
    }

    [0, 1]
 */

function twoSum(nums: number[], target: number): number[] {
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (numMap.has(difference)) {
      return [numMap.get(difference)!, i];
    }

    numMap.set(nums[i], i);
  }

   return [];
}

// Time Complexity:  O(n)

console.log(twoSum([2, 7, 11, 15], 9));
