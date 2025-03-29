const randomColor = function(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

const button = document.querySelector('#changeColor')
const container = document.querySelector('.container')
container.addEventListener('click',function (e){
    container.classList.toggle('hide')
})
button.addEventListener('click',function(e){
    container.style.backgroundColor = randomColor()
    e.stopPropagation()
})