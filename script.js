// Initial Variables
const addItem_button = document.querySelector("#add-item-button");
let inputValue = "";

let items = [];
let itemsCount = 0;

loadData();

// Call function addItem when clicking the addItem button
addItem_button.onclick = function(){
    inputValue = document.getElementById('add-item-input').value;
    if(!(inputValue == "" || inputValue == undefined)){
        addItem(inputValue);
    }
};

// Function implementation of adding a new item
function addItem(itemTitle){
    // List of all the item containers
    items[itemsCount] = itemTitle;
    itemsCount++;
    localStorage.setItem("itemsCount", itemsCount);
    localStorage.setItem("items", JSON.stringify(items));
    document.getElementById('add-item-input').value = "";

    // Item containe creation and assignment
    const itemContainer = document.createElement("div");
    itemContainer.id = "item-container";
    document.getElementById("todo-container").appendChild(itemContainer);

    const lastContainer = document.getElementById("todo-container").lastElementChild;

    // Item title creation and assignment
    const titleSpan = document.createElement('span');
    titleSpan.innerText = itemTitle;
    titleSpan.id = "item-title";
    lastContainer.appendChild(titleSpan);

    // Item removal button creation and assignment
    const delItem_button = document.createElement("button");
    delItem_button.id = "del-button";

    // When clicking the item removal button call the delItem function
    delItem_button.onclick = function(){
        delItem(lastContainer);
    }
  
    lastContainer.appendChild(delItem_button);

    const lastDelButton = lastContainer.lastElementChild;

    // Item removal button img
    const delItem_img = document.createElement('img');
    delItem_img.id = "del-img";
    delItem_img.src="./remove_icon.png";
    delItem_button.ondragstart = () => {return false};
    lastDelButton.appendChild(delItem_img);
}

// Function implementation of deleting an item
function delItem(parent){
    parent.remove();
    itemsCount -= 1;
    localStorage.setItem("itemsCount", itemsCount);
}

// Function implementation of loading the saved data
function loadData(){
    const itemsCount = localStorage.getItem("itemsCount");
    for (let index = 0; index < itemsCount; index++) {
        addItem();
    }
}
