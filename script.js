const addItem_button = document.querySelector("#add-item-button");
let inputValue = "";

let items = [];
let itemsCount = 0;

addItem_button.onclick = function(){
    inputValue = document.getElementById('add-item-input').value;
    if(!(inputValue == "" || inputValue == undefined)){
        addItem(inputValue);
    }
};

function addItem(itemTitle){
    items[itemsCount] = itemTitle;
    itemsCount++;
    document.getElementById('add-item-input').value = "";
    console.log(items);

    const itemContainer = document.createElement("div");
    itemContainer.innerText = itemTitle;
    itemContainer.id = "item-container";
    document.getElementById("todo-container").appendChild(itemContainer);

}



