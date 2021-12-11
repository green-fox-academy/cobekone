function adder(n: number): number {
  if (n === 0) {
    return 0;
  }
  return n + adder(n - 1);
}

console.log(adder(5));
