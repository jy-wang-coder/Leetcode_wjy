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
    if (len === 1) {
        return s
    }
    if (len ===2){
        if (s[0]===s[1]){
            return s
        } else {
            return s[0]
        }
    }
    let maxlen = 0
    let maxstr = ''

    var findOddLongest = (j) => {
        let l = j
        let r = j
        while (l >=1 && r <= len-2) {
            if (s[l-1] === s[r+1]){
                l -= 1
                r +=1
            } else {
                break
            }
        }
        return [l,r,r-l+1]
    }

    var findEvenLongest = (j) => {
        let l = j
        let r = j+1
        if (s[l] !== s[r]){
            return [0,0,0]
        }
        while (l >=1 && r <= len-2) {
            if (s[l-1] === s[r+1]){
                l -= 1
                r +=1
            } else {
                break
            }
        }
        return [l,r,r-l+1]
    }



    for (let j=1; j <= len-1 ; j++){
        let tmp1 = findOddLongest(j)
        if (tmp1[2] > maxlen){
            maxstr = s.slice(tmp1[0] , tmp1[1]+1)
            maxlen = Math.max(maxlen, tmp1[2])
        }
    }

    for (let j=0; j <= len-2 ; j++){
        let tmp2 = findEvenLongest(j)
        if (tmp2[2] > maxlen){
            maxstr = s.slice(tmp2[0] , tmp2[1]+1)
            maxlen = Math.max(maxlen, tmp2[2])
        }
    }

    return maxstr
};

const s = "ccd"
const str = longestPalindrome(s)
console.log('The answer is')
console.log(str)
// @lc code=end

