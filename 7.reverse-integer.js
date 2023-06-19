/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = (x > 0) ? 1 : -1
    let i = 0
    var res = 0
    x = Math.abs(x)

    while (x > 0) {
        digit = x % 10
        res = res *10 + digit
        x = Math.floor(x / 10)
        i += 1
    }

    const result = res * sign
    if (result > 2**31-1 || result < -(2**31)) return 0
    return result
};
console.log(reverse(-123))
// @lc code=end

