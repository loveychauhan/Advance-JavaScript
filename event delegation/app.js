const usrName = document.querySelector('#usrName');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#submitTweet');
const tweetContainer = document.querySelector('#tweets');
btn.addEventListener('click',function(){
    addlist()
    usrName.value = ''
    pass.value = '' 
})

const addlist = function(){
    if(usrName.value && pass.value) {
        const lis = document.createElement('li');
        const bold = document.createElement('b')
        bold.innerText = usrName.value
        lis.appendChild(bold)
        lis.innerHTML += ` - ${pass.value}`
        return tweetContainer.appendChild(lis)
    }

} 

tweetContainer.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e)
})