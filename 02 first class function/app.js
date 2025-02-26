// function statement aka function declaration

a()

function a() {
    console.log('a called')

}

// function expression
var b = function () {
    console.log('b called')
}


//named function expression
var c = function abc() {
    console.log('abc called')
}



// anonymous function -> function with no name // it will thorow error when we write it as a function statement
// but it can be used as a function expression

// anonymous function
// function (){ // error Uncaught SyntaxError: Function statements require a function name
//     console.log('anonymous function')
// }

// first class function

// ability of a function to be uesd like value... so the function can be passed as an argument or can be returned from another function.

function e(){
    return function f(){
        console.log('f called')
    }
}
e()()