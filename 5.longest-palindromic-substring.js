/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let len = s.length
    let res = ""
    let resLen = 0
    for (let i = 0; i < len ; i++) {
        // odd length
        let l = i
        let r = i
        while ((l >=0) && (r<len) && s[l]===s[r]) {
            if ((r-l+1) > resLen){
                res = s.slice(r,r+1)
                resLen = r-l+1
            }
            l -= 1
            r += 1
        }
        // even length 

        let el = i
        let er = i+1
        while ((el >=0) && (er<len) && s[el]===s[er]) {
            if ((er-el+1) > resLen){
                res = s.slice(er,er+1)
                resLen = er-el+1
            }
            el -= 1
            er += 1
        }
    }
    return res
};

const s = "ccd"
const str = longestPalindrome(s)
console.log('The answer is')
console.log(str)
// @lc code=end

