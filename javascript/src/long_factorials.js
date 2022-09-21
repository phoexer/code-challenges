function longFactorials (n) {
  const cache = new Map()
  const factorial = n => {
    if (n === 0) {
      return 1n
    }
    if (cache.has(n)) {
      return cache.get(n)
    } else {
      const x = BigInt(n) * factorial(n - 1)
      cache.set(n, x)
      return x
    }
  }
  return factorial(n).toString()
}

console.assert(longFactorials(1) === '1')
console.assert(longFactorials(2) === '2')
console.assert(longFactorials(3) === '6')
console.assert(longFactorials(12) === '479001600')
console.assert(longFactorials(25) === '15511210043330985984000000')
console.log('All tests passed')
