function useCallback(callback: any) {
  callback("valami1");
  callback("valami2");
  callback("valami3");
}

function printSentence(sentence: any) {
  sentence += 1;
  console.log(sentence);
}

useCallback(printSentence);
