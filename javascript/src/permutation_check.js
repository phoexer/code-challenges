function solutionBrute (A) {
  const aSet = new Set(A)
  for (let i = 1; i <= A.length; i++) {
    if (!aSet.has(i)) {
      return 0
    }
  }
  return 1
}

function solutionFinal (A) {
  const aSet = new Set(A)
  const n = A.length
  const expectedSum = (n * (n + 1)) / 2
  const actualSum = Array.from(aSet).reduce((sum, value) => sum + value, 0)
  return actualSum === expectedSum ? 1 : 0
}

console.assert(solutionBrute([4, 1, 3, 2]) === 1)
console.assert(solutionBrute([4, 1, 3]) === 0)

console.assert(solutionFinal([4, 1, 3, 2]) === 1)
console.assert(solutionFinal([4, 1, 3]) === 0)
console.log('All tests passed')
