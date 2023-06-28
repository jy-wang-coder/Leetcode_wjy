/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// // brute force
// var maxArea = function(height) {
//     var n = height.length
//     var res = 0
//     for (var l = 0; l < n-1; l++) {
//         for (var r = l+1; r < n; r++) {
//             tmp = Math.min(height[l], height[r]) * (r-l)
//             res = Math.max(res,tmp)
//         }
//     }
//     return res
// };


// @lc code=end


var maxArea = function(height) {
    var n = height.length
    var l = 0
    var r = n-1
    var res = 0
    while (l < r) {
        var tmp = Math.min(height[l], height[r]) * (r-l)
        if (tmp > res) {
            res = tmp
            if (height[l] > height[r]) {
                r -= 1
            } else {
                l += 1
            }
        } else {
            if (height[l] > height[r]) {
                r -= 1
            } else {
                l += 1
            }
        }
    }
    return res
}

console.log(maxArea([1,1000,1000,6,2,5,4,8,3,7]));