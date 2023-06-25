/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var dic = new Map()

    var dfs = function (i, j) {
        if (dic.has((i,j))) {
            return dic[(i,j)]
        }

        if (i >= s.length && j >= p.length) {
            return true
        }
        if (j >= p.length) {
            return false
        }
        
        var match = i < s.length && (s[i] === p[j] || p[j] === '.')

        if (j+1 < p.length && p[j+1] === '*') {
            dic[(i,j)] = dfs(i, j+2) || (match && dfs(i+1, j))
            return dic[(i,j)]
        } 
        if (match){
            dic[(i,j)] = dfs(i+1, j+1)
            return dic[(i,j)]
        }
        return false
    }
    return dfs(0,0)
};

// @lc code=end

