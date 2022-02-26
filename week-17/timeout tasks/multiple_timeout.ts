let timeoutObjects: any[] = [
  { name: "pear", value: 1000 },
  { name: "melon", value: 3000 },
  { name: "grapes", value: 5000 },
];

console.log("apple");

function timeOutFunction(toLog: string, timeout: number) {
  setTimeout(() => {
    console.log(toLog);
  }, timeout);
}

for (let i = 0; i < timeoutObjects.length; i++) {
  timeOutFunction(timeoutObjects[i].name, timeoutObjects[i].value);
}
