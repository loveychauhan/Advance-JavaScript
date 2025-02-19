// what is async
// -> async is a keyword used in front of a function to make that function a async function. 
// A async function that always return a promise.

// what is await
// -> await is a keyword that can only be used inside a async function.
// It is written in front of a promise. 
// await resolves a promise

//function to create a promise

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise1 is generated.')
    }, 3000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2 is generated.')
    }, 40000)
})

user_Api = "https://api.github.com/users/loveychauhan"

async function getPromise() {
    const data = await fetch(user_Api) // this will return a response object with a body that has a readable stream that can be converted into json by using data.json()

    const jsonData = await data.json()     // data.json() will again retrun a promise 
    console.log(jsonData)



}

getPromise().catch(err => console.log(err))



