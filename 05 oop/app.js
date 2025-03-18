// function hex(r,g,b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b){
//     return `rgb(${r}, ${g}, ${b})`
// }

// hex(255,43,69)





//BY USING FACTORY FUNCTION 
// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     color.rgb = function () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     return color;

// }


// BY USING CONSTRUCTOR FUNCTION
// function MakeColor(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b

// }

// MakeColor.prototype.baseColor = function(){
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`
// }
// MakeColor.prototype.rgb = function () {
//     return `rgb(${this.baseColor()})`
// }
// MakeColor.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// MakeColor.prototype.rgba  = function(a=1.0){
//     return `rgb(${this.baseColor()}, ${a})`
// }

// const color1 = new MakeColor(255, 65, 100)


//BY USING CLASS

// class Color {
//     constructor(r, g, b) {
//         this.r = r
//         this.g = g
//         this.b = b
//     }
//     baseColor() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`
//     }
//     rgb() {
//         return `${this.baseColor()}`
//     }
//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     rgba(a = 1.0) {
//         return `${this.baseColor()}, ${a}`
//     }
// }

// const white = new Color(255, 255, 255)
// const red = new Color(255, 25, 65)



//Extends and super Keywords

class Pet {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} likes fish!`
    }
}

class Cat extends Pet {
    constructor(name,age,livesLeft = 9){
        super(name,age)
        this.livesLeft = livesLeft
    }
    meow() {
        return 'Meoww!!'
    }
}

class Dog extends Pet{
    bark() {
        return "WOOFF!!"
    }
}