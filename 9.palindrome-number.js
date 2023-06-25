/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var nums = []
    if (x < 0) {
        return false
    }
    while (x != 0) {
        nums.push(x % 10)
        x = Math.floor(x / 10)
    }
    var l = 0
    var r = nums.length - 1
    while (l < r) {
        if (nums[l] !== nums[r]) {
            return false
        }
        l += 1
        r -= 1
    }
    return true
};
// @lc code=end
