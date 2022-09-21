function failed_solution(A){
    const expectedSum = (n * (n+1)) / 2
    const actualSum = A.reduce((sum, value)=> sum + value, 0)
    return actualSum === expectedSum ? 1 : 0
}

function solution_brute(A){
    const aSet = new Set(A)
    for(let i = 1;i <= A.length; i++) {
        if(!aSet.has(i)){
            return 0
        }
    }
    return 1
}

function solution_final(A){
    const aSet = new Set(A)
    const n = A.length
    const expectedSum = (n * (n+1)) / 2
    const actualSum = Array.from(aSet).reduce((sum, value)=> sum + value, 0)
    return actualSum === expectedSum ? 1 : 0
}
