/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    res = ''
    if (s===null || numRows <= 0) {
        return ''
    } 
    if (numRows===1) {
        return s
    } // 避免出现死循环 step=0
    for (let i = 0; i < numRows; i++){
        const step= numRows *2 - 2
        // if (i===0 | i===numRows-1) {
        //     var step = numRows *2 - 2
        // } else {
        //     var step = numRows *2 - 2 * (i+1)
        // }
        for (let j = i; j < s.length; j += step){
            res += s[j]
            var r = step - 2*i
            if ((i!==0) && (i!==numRows-1) && (j+r<s.length)) {
                res += s[j+r]
            }
        }
    }
    return res
};

let result = convert("A",1)
// @lc code=end

