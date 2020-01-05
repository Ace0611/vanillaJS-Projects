const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const selectAll = document.querySelector('#select');
const clearAll = document.querySelector('#clear');

const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates=[], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" id=item${i} ${plate.done ? 'checked' : null}>
                <label for=item${i} data-index=${i}>${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('label')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function selectAllCheck(){
    items.forEach((item) => {
        item.done = true;
    })
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

function clearAllCheck(){
    items.forEach((item) => {
        item.done = false;
    })
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
selectAll.addEventListener('click', selectAllCheck);
clearAll.addEventListener('click', clearAllCheck);

populateList(items, itemsList)