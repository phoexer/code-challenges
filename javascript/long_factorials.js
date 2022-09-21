function longFactorials(n) {
    const cache = new Map()
    const factorial = n => {
        if (n == 0){
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


