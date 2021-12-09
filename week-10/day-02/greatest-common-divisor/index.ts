function gsd(num1: number, num2: number): number {
  let dividedRemaining = num1 % num2;

  if (num1 < 0 || num2 < 0) {
    return -1;
  }

  if (dividedRemaining === 0) {
    return num2;
  }
  return gsd(num2, dividedRemaining);
}

console.log(gsd(84, 18));
