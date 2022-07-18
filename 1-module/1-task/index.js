function factorial(n) {
  y = n;
  for (i = 1; i < y; i += 1) {
    n *= i;
  }
  return n || 1;
}
