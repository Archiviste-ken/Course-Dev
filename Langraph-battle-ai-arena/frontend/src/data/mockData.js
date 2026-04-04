export const initialChatData = [
  {
    id: "msg_1",
    type: "user",
    text: "Can you provide two different ways to solve the Two Sum problem in Python?",
    timestamp: "10:30 AM"
  },
  {
    id: "msg_2",
    type: "ai_response",
    problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    solution1: "```python\ndef twoSum(nums, target):\n    # O(n^2) approach\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n```\n\nThis is a brute-force solution where we check every possible pair in the array to see if they add up to the target.",
    solution2: "```python\ndef twoSum(nums, target):\n    # O(n) approach\n    hashmap = {}\n    for i in range(len(nums)):\n        complement = target - nums[i]\n        if complement in hashmap:\n            return [hashmap[complement], i]\n        hashmap[nums[i]] = i\n```\n\nThis solution uses a hash map to store the elements and their indices, allowing us to find the complement in O(1) time.",
    judge: {
      solution_1_score: 5,
      solution_2_score: 10,
      solution_1_reasoning: "Simple brute-force approach, but highly inefficient with O(n^2) time complexity. Not suitable for large arrays.",
      solution_2_reasoning: "Optimal solution utilizing a one-pass hash map for O(n) time complexity and O(n) space complexity. Very efficient."
    },
    timestamp: "10:31 AM"
  }
];
