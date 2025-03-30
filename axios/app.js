// axios.get("https://www.swapi.tech/api/planets/1/")
// .then((res)=>{
//     console.log(res.data.result.properties.name);
// })

const getStarWars = async(i) =>{
    try{
        const res = await axios.get(`https://www.swapi.tech/api/planets/${i}/`)
        console.log(res.data.result.properties.name)
    }
    catch(e){
        console.log("Error",e.message)
    }

}