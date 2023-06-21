/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var i = 0
    var len = s.length
    var sign = 1
    var res = 0

    s = s.trim()

    if (s.length === 0) {
        return 0
    }

    if (s[i] === '-') {
        sign = -1
        i += 1
    } else if (s[i] === '+') {
        i += 1
    }

    for (var j = i; j < s.length; j++) {
        if (/^\d$/.test(s[j])) {
            res = res * 10 + parseInt(s[j])
        } else {
            return bigInteger(res * sign)
        }
    }
    return bigInteger(res * sign)
    
};

var bigInteger = function (n) {
    if (n >= 2**31) {
        return 2**31 - 1
    } else if (n < -(2**31)) {
        return -(2**31)
    } else {
        return n
    }
}
console.log(myAtoi("+1"))

// @lc code=end

