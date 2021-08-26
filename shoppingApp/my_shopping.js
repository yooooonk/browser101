const input = document.querySelector('.input')
const shoppingList = document.querySelector('.shopping-list')
const addButton = document.querySelector('.add-button')


const onAdd = ()=>{
    const item = input.value
    if(!item) return;

    shoppingList.appendChild(newItem(item))
    input.value = ''
    item.scrollIntoView({block:'center'})
}


const newItem = (item)=>{
    const div = document.createElement('div');
    div.classList.add('item');

    div.innerHTML = `${item}<i class="far fa-trash-alt delete-item-button"></i>`

    return div;
}



input.addEventListener('keydown',(e)=>{
    const item = e.target.value

    if(!item) return;

    if(e.key === "Enter"){
        onAdd()   
    }
})
addButton.addEventListener('click',()=>{
    onAdd()
    
})


// 이벤트 최적화때문에 shopping-list에 이벤트 걸었음
shoppingList.addEventListener('click',(e)=>{
   if(e.target.classList[0] === 'delete-item-button'){
        const item = e.target.parentNode
        item.remove()
    
   }
})