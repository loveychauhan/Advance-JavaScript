"use strict"

// this in global space;
console.log(this)       //-> global object  :- which in case of browser is window

// this inside a  function
function learn() {
    //value depends on strict / non-strict mode
    console.log(this)
}

//in non strict mode a phenomemon occur called (this substitution) 
// in which if the value of this is undefined or null then it will be replaced by a global object.
// so the value of 'this' in function is undefined but due to (this substitution) we get this as a global object inside a function.

// this keyword value depends on how function is called
learn()         //if the funcition is called without the refrence then it is undefined in strict mode ... but in non-strict mode (this substitution) occur

window.learn()   // when the function is called with a refrence this will refer to the calling object which in this case is window object.

//this inside a object method.
const obj = {
    a: 10,
    func: function () {
        console.log(this.a)
    }
}

obj.func();
//this inside a function func will refer to the obj object,

//call apply bind mehtods (sharing methods)

const student1 = {
    name: "Hardik",
    printName: function () {
        console.log(this.name)     // value of this student1 
    }
}
student1.printName();

const student2 = {
    name: "Lovey",
}
student1.printName.call(student2)   // value of this student2 which is passed inside a student1 


///this function inside arrow function
// console.log(this) think of it as it is written here, it will refer to the window object
const obj1 = {
    a: 20,
    x: () => {
        console.log(this)
    }
    // as we knew arrow function doesn't provide thier own this binding 
    // (its retains this value of their enclosing lexical context)
    //it means this keyword inside arrow funcition behave like arrow function wasn't there.In obj1 it will refer to the window object its enclosing lexical context
}

obj1.x()

const obj2 = {
    a: 20,
    x: function () {
        // console.log(this) think of it as it is written here so it will refer to obj2 object
        let b = 10
        const y = () => {
            console.log(this.a)
        }
        y()
    }
    //In obj2 it will refer to the window object its enclosing lexical context
}

obj2.x()