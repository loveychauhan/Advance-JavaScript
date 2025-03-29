const form = document.querySelector('form');
const catName = document.querySelector('#catName');
function addCat(){
    const ul = document.querySelector('ul');
    const newli = document.createElement('li')
    ul.appendChild(newli)
    newli.innerText = catName.value;
    catName.value = ''
} 

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    addCat()
    
})

