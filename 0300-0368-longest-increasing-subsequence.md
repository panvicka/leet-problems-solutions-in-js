## 300 Longest increasing subsequence 

- brute force: generate all 2^n subsequence and evaluate, at least O(2^n)
- dynamic programming with subproblems O(n^2)


- what is subsequence? Continous or non-continous sequence, just different sections of the array, but do not change the order
```
[-1,3,4,5,2,2,2,2]
```
- **Longest increasing subsequence*** -1, 3, 4, 5
  - no flats allowed 
- ***Longest non-decreasing subsequence*** -1, 2, 2, 2, 2
  - 2 are flats, not strickly increasing but also not decreasing
- Longest decreasing subsequence 


### Solutions 
- https://www.youtube.com/watch?v=fV-TF4OvZpk
- https://www.interviewbit.com/blog/longest-increasing-subsequence/


## 368 Longest increasing subsequence 
- https://leetcode.com/problems/largest-divisible-subset/discuss/684677/3-STEPS-c%2B%2B-or-python-or-java-dp-PEN-PAPER-DIAGRAM 
1. Sort all array elements in increasing order. The purpose of sorting is to make sure that all divisors of an element appear before it.
2. Create an array dp[] of same size as input array. dp[i] stores size of divisible subset ending with arr[i] (In sorted array). The minimum value of dp[i] would be 1.
3. Traverse all array elements. For every element, find a divisor arr[j] with largest value of dp[j] and store the value of dp[i] as dp[j] + 1.