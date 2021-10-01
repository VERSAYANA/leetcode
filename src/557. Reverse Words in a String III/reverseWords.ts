// Time complexity : O(n)
// Space complexity : O(n)
function reverseWords1(s: string): string {
  const words = s.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
}

function reverseWords2(s: string): string {
  let word = "";
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      result = " " + word + result;
      word = "";
    } else if (i === 0) {
      result = word + s[i] + result;
    } else {
      word = word + s[i];
    }
  }

  return result;
}
