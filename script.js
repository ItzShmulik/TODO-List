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
    itemContainer.id = "item-container";
    document.getElementById("todo-container").appendChild(itemContainer);

    const lastContainer = document.getElementById("todo-container").lastElementChild;

    const titleSpan = document.createElement('span');
    titleSpan.innerText = itemTitle;
    titleSpan.id = "item-title";
    lastContainer.appendChild(titleSpan);

    const delItem_button = document.createElement("button");
    delItem_button.id = "del-button";
    lastContainer.appendChild(delItem_button);

    const lastDelButton = lastContainer.lastElementChild;

    console.log(lastDelButton);

    const delItem_img = document.createElement('img');
    delItem_img.id = "del-img";
    delItem_img.src="./remove_icon.png";
    delItem_button.ondragstart = () => {return false};
    lastDelButton.appendChild(delItem_img);
}

