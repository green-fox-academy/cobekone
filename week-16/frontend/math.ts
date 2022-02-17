export function sumUntil(input: number): number {
  let result: number = 0;
  for (let i = 0; i <= input; i++) {
    result += i;
  }

  return result;
}
export function factor(input: number): number {
  let result: number = 1;
  for (let i = 0; i < input; i++) {
    result += result * i;
  }

  return result;
}
