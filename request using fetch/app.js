// fetch("https://www.swapi.tech/api/people/1")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data.result.properties.name)
//     return fetch("https://www.swapi.tech/api/people/2")
// })
// .then((res)=>{
//     return res.json()
// })
// .then((data2)=>{
//     console.log(data2.result.properties.name)
// })

// .catch((rej)=>{
//     console.log(rej)
// })


// using async function

const reqforstarwars = async()=>{
    try{
        const req1= await fetch("https://www.swapi.tech/api/people/1")
        const data1 =await req1.json()
        console.log(data1.result.properties.name)
        const req2= await fetch("https://www.swapi.tech/api/people/2")
        const data2 =await req2.json()
        console.log(data2.result.properties.name)
    }
    catch(e){
        console.log("Error",e)
    }
   
    
}