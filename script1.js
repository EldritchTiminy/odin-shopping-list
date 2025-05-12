let listEl = document.querySelector(".slist");
let buttonOne = document.querySelector("div .buttons");
let inputOne = document.querySelector("div .item-input");

function addListItem(event){
  console.log("Event: 'Add Item' was clicked.");
  let currentItemInput = inputOne.value;
  inputOne.value = '';
  console.log(`Input Value: "${currentItemInput}"`);
  let newListItem = document.createElement("li");
  let newSpan = document.createElement("span");
  let newButton = document.createElement("button");
  newListItem.appendChild(newSpan);
  newListItem.appendChild(newButton);
  newSpan.textContent = currentItemInput;
  newButton.textContent = "Delete";
  deleteButton(newButton);
  listEl.appendChild(newListItem);
  inputOne.focus();
}

function deleteButton(newDelButt){
  newDelButt.addEventListener('click', () => {
    let buttonParent = newDelButt.parentElement
    let buttonSib = buttonParent.children[0];
    console.log(`Event 'Delete' was clicked.`);
    console.log(`Item Deleted: ${buttonSib.textContent}`);
    buttonParent.remove();
  });
}

buttonOne.addEventListener('click', addListItem);