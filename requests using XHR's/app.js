// "https://www.swapi.tech/api/starships/9"

const req = new XMLHttpRequest()

req.onload = function(){
    console.log("It loaded")
    const data = JSON.parse(this.response)
    console.log(data.results)
}
req.error = function(){
    console.log("error")
    console.log(this)
}

req.open("GET", "https://www.swapi.tech/api/starships")
req.send()