// const radius = [2, 3, 4, 5]

// const area = function (radius) {
//     return Math.PI * radius * radius
// }
// const circumference = function (radius) {
//     return 2 * Math.PI * radius
// }
// const diameter = function (radius) {
//     return 2 * radius
// }

// Array.prototype.calculate = function (logic) {
//     console.log(radius)
//     console.log(this)
//     const result = []
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]))
//     }
//     return result;
// }
// console.log(this)
// function calculate(logic) {
//     console.log(this)
//     const result = []
//     for (let i = 0; i < radius.length; i++) {
//         result.push(logic(radius[i]))
//     }
//     return result;
// }
// console.log(calculate(diameter))


// console.log(radius.calculate(area))
// console.log(radius.calculate(circumference))
// console.log(radius.calculate(diameter))

//filter 

// const arr = [1, 3, 5, 6, 2]

// function isGreater(x) {
//     return x < 3
// }
// const newArr = arr.filter(isGreater)
// console.log(newArr)



// Reduce

// const arr = [1, 3, 5, 4]

// function findMax(arr) { // max = 1 1 < 3 max = 3  3 < 5 max =5 5 < 4
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];

//     }
//     return max
// }
// console.log(findMax(arr))

// const max = arr.reduce((acc, curr) => {
//     if (curr > acc) acc = curr
//     return acc
// }, arr[0])

// console.log(max)

const users = [
    { firstName: 'Lovey', lastName: 'Singh', age: 22 },
    { firstName: 'coder', lastName: 'Singh', age: 25 },
    { firstName: 'Sant', lastName: 'Kabir', age: 500 },
    { firstName: 'Sachin', lastName: 'Tendulkar', age: 55 },
    { firstName: 'Jim', lastName: 'Carrey', age: 55 }
]


// const userName = users.map((x) => x.firstName + ' ' + x.lastName)
// console.log(userName)

//reduce

// {22: 1, 500: 1, 55:2}

// const output = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     }
//     else {
//         acc[curr.age] = 1
//     }
//     return acc

// }, {})
// console.log(output)

// filter :-> print first name of all the people whose age is less than 30

// const arr = users.filter((x) => x.age > 30).map((x) => x.firstName)
// console.log(arr)
// by using reduce
// ['lovey', 'mahatma gandhi']
const output = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName)
    }
    return acc
}, [])

console.log(output)