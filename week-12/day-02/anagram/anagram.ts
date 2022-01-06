export function anagram(string1: string, string2: string) {
  let string2Array: string[] = [];

  for (let i = 0; i < string2.length + 1; i++) {
    string2Array[i] = string2[i];
  }
  for (let i = 0; i < string1.length; i++) {
    if (string2Array.indexOf(string1[i]) === -1) {
      return false;
    } else {
      string2Array.splice(string2Array.indexOf(string1[i]), 1);
    }
  }

  if (string2Array[0] === undefined) {
    return true;
  } else {
    console.log(string2Array);
    return false;
  }
}
