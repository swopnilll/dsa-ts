export const reverseString1 = (string: String): String => {
  return string.split("").reverse().join("");
};

export const reverseString2 = (string: String): String => {
  let reverseString = "";

  for (let char of string) {
    reverseString = char + reverseString;
  }

  return reverseString;
};

export const reverseString3 = (string: String): String => {
  return string.split("").reduce((reversedString, char) => {
    return char + reversedString;
  }, "");
};
