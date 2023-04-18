const listElement = document.querySelector(".list");
const inputText = document.querySelector("#text-item");
const addBtn = document.querySelector(".add");
const clearHistoryBtn = document.querySelector(".clearHistory");

let arr = [];

function renderTodo() {
    listElement.innerText = "";

    arr.forEach((text, index) => {
        const liElement = document.createElement("li");
        liElement.innerText = text;
        listElement.appendChild(liElement);
    });
}

function addItens() {
    if (inputText.value) {
        arr.push(inputText.value);
    }
    renderTodo();
    return saveList();
}

addBtn.addEventListener("click", addItens);

inputText.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        // codigo da tecla enter
        return addItens();
    }
});

function deleteItem(pos) {
    arr.splice(pos, 1);
    renderTodo();
}

function saveList() {
    arr.forEach((text, index) => {
        localStorage.setItem(index + 1, text);
    });
}

function renderSaveList() {
    if (localStorage.length > 1) {
        for (let i = 1; i <= localStorage.length; i++) {
            arr.push(localStorage[i]);
        }
    }
}

renderSaveList();

clearHistoryBtn.addEventListener("click", () => {
    localStorage.clear();
    arr = [];
    renderTodo();
});

renderTodo();
