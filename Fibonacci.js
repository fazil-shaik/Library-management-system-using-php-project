function generateFibonacciWithRecursion(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    let fibonacciSeries = generateFibonacciWithRecursion(n - 1);
    fibonacciSeries.push(fibonacciSeries[n - 2] + fibonacciSeries[n - 3]);
    return fibonacciSeries;
  }
}

const resultWithRecursion = generateFibonacciWithRecursion(10);
console.log(resultWithRecursion);
