const input = document.querySelector('.input')
const shoppingList = document.querySelector('.shopping-list')
const addButton = document.querySelector('.add-button')

const onEnter = (e)=>{
    const item = e.target.value

    if(!item) return;

    if(e.key === "Enter"){
        shoppingList.appendChild(newItem(item))
        e.target.value = ''
    }
}

const onClickAddButton = ()=>{
    const item = input.value
    if(!item) return;

    shoppingList.appendChild(newItem(item))
    input.value = ''
}


const newItem = (item)=>{
    const div = document.createElement('div');
    div.classList.add('item');

    div.innerHTML = `${item}<i class="far fa-trash-alt delete-item-button"></i>`

    return div;
}

input.addEventListener('keydown',onEnter)
addButton.addEventListener('click',onClickAddButton)


// 이벤트 최적화때문에 shopping-list에 이벤트 걸었음
shoppingList.addEventListener('click',(e)=>{
   if(e.target.classList[0] === 'delete-item-button'){
        const item = e.target.parentNode
        item.remove()
    
   }
})