const closestMultiple10 = (num) => {
  return Math.round(num / 10) * 10;
};

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError;
  if (n <= 1) return 1;
  let s = 1;
  for (let i = n; i > 1; i--) {
    s *= i;
  }
  return s;
}

var isAnagram = function (test, original) {
  return (
    [...test.toLowerCase()].sort().join("") ==
    [...original.toLowerCase()].sort().join("")
  );
};

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}
