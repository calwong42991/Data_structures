/* https://leetcode.com/problems/longest-palindromic-substring/description/ */

const longestPalindrome = (s) => {
  var n = s.length;
  var res = '';
  var dp = [];

  while (dp.push(new Array(n).fill(-1)) < n);

  for (var i = n - 1; i >= 0; i--) {
    for (var j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && ((j - i < 3) || dp[i + 1][j - 1]);
      if (dp[i][j] === undefined) {
        console.log(i, j, s[i], s[j], dp[i + 1][j - 1])
      }
      if (dp[i][j]) {
        var tmp = s.substring(i, j + 1);
        if (tmp.length > res.length) res = tmp;
      }

    }
  }
  return res;
}



console.log(longestPalindrome('babad'));