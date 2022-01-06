function countLetters(input: string) {
  let resultArray: any = {};

  for (let i = 0; i < input.length; i++) {
    resultArray[input[i]] = 0;
  }

  for (let i = 0; i < input.length; i++) {
    resultArray[input[i]]++;
  }

  console.log(resultArray);
}

countLetters("thisthingworksnicelywithenglishstrings");
