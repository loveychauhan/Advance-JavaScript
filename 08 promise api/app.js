
//Creating Dummy Promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {             // p1 resolve
        resolve("P1 success")
    }, 2000)

    // setTimeout(() => {             // p1 reject
    //     reject("P1 fail")
    // }, 2000)


})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {             // p2 resolve
        resolve("P2 success")
    }, 1000)

    // setTimeout(() => {             // p2 rejected
    //     reject("P2 fail")
    // }, 1000)

})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {             // p3 resolve
        resolve("P3 success")
    }, 3000)

    // setTimeout(() => {             // p3 reject
    //     reject("P3 fail")
    // }, 3000)

})

//Promsie.all()
Promise.all([p1, p2, p3])
    .then((res) => {                // return the array with the resolved value ['p1 success','p2 success','p3 success']
        console.log(res);       
    })
    .catch((err) => {               // return the first fail promise immediately and don't wait for other promise to resolve
        console.error(err)
    })


// Promise.allSetteled()
Promise.allSettled([p1, p2, p3])
    .then((res) => {             //return array of object [{...},{...},{...}] with status fullfilled
        console.log(res);
    })
    .catch((err) => {           //return array of object [{...},{...},{...}] with status rejected
        console.error(err)
    })


// Promise.race()
Promise.race([p1, p2, p3])
    .then((res) => {                  // return the value of first setteled value
        console.log(res);
    })
    .catch((err) => {               // return the first setteled promise reject
        console.error(err)
    })

//Promise.any()
Promise.any([p1, p2, p3])
    .then((res) => {             // return value for the first resolved promise [seek for success]
        console.log(res)
    })
    .catch((err) => {           // if all rejected -> AggregateError: All promises were rejected
        console.error(err)
        console.log(err.errors)    //(3) ['P1 fail', 'P2 fail', 'P3 fail']
    })
