const itemsList = document.getElementById("items-list");
const addItemButton = document.getElementById("addTodo");
const inputField = document.getElementById("todoInput");

let items = JSON.parse(loadItems());

addItemButton.onclick = () => {
    var value = inputField.value
    if (value != "") {
        items.push(value);
        inputField.value = "";
        saveItem(items);
        render();

    }
}

function render() {
    itemsList.innerHTML = null;
    for (let [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "5px";
        container.style.marginTop = "10px";

        var text = document.createElement("p");
        text.textContent = item;
        text.style.marginLeft = '10px';
        text.style.display = "inline";


        deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.style.marginLeft = "30px";
        deleteButton.style.display = "inline";
        deleteButton.onclick = () => {
            console.log(`${idx} clicked`)
            deleteItem(idx)
        }

        container.appendChild(text);
        container.appendChild(deleteButton);
        itemsList.appendChild(container);
    }
}



function deleteItem(idx) {
    items.splice(idx, 1);
    saveItem(items);
    render();
    console.log(items);
}

function saveItem(items) {
    items = JSON.stringify(items);
    let storedItems = localStorage.setItem("items", items);


}

function loadItems() {
    let loadedItems = localStorage.getItem("items");
    return loadedItems;
}
document.addEventListener("DOMContentLoaded", () => { render() })