const evenNumbers = [0, 2, 4, 6, 8]


//if any of the condition is true the retrun value will be true

// const res = evenNumbers.some((num, i) => {
//     if (num % 2 === 1) {
//         console.log(i)
//     }
//     return num % 2 === 1
// })

// console.log(res)



// every value should result true to return the value true
const res2 = evenNumbers.every((num) => {
    return num % 2 === 0
})

console.log(res2)