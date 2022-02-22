/*
You might know some pretty large perfect squares. But what about the NEXT one?

Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

For example:

perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)
*/

function perfectSquare(num) {
    let sqrtNum = Math.sqrt(num)
    if(sqrtNum != Math.floor(sqrtNum)) {
        return -1
    }
    sqrtNum++
    return sqrtNum * sqrtNum
}

function testPerfectSquare(inp, exp) {
    const res = perfectSquare(inp)
    const passed = res === exp
    console.log("passed:", passed, ` inp: ${inp}  res: ${res}  exp: ${exp}`)
}

testPerfectSquare(9, 16)
testPerfectSquare(289, 324)
testPerfectSquare(3000, -1)