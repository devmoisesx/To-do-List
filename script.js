const listElement = document.querySelector(".list");
const inputText = document.querySelector("#text-item");
const addBtn = document.querySelector(".btn-add");
const deleteBtn = document.querySelector(".delete");

let arr = {};

function renderTodo() {
  listElement.innerText = "";

  for (let [index, text] of Object.entries(arr)) {
    const note = document.createElement("li");
    note.classList.add("note");

    const noteUtilities = document.createElement("div");
    noteUtilities.classList.add("utilities-note");
    
    const utilitieCheck = document.createElement("input");
    utilitieCheck.setAttribute("type", "checkbox")
    utilitieCheck.setAttribute("name", "check")
    utilitieCheck.setAttribute("id", "check")
    utilitieCheck.classList.add("check");
    // utilitieCheck.addEventListener("click", () => checkItem(index));
    noteUtilities.appendChild(utilitieCheck);

    // const utilitieDelete = document.createElement("span");
    // utilitieDelete.innerText = "x";
    // utilitieDelete.classList.add("delete");
    // utilitieDelete.addEventListener("click", () => deleteItem(index));
    // noteUtilities.appendChild(utilitieDelete);

    note.appendChild(noteUtilities);

    const noteTitle = document.createElement("div");
    noteTitle.classList.add("title-note");
    note.appendChild(noteTitle);
    const title = document.createElement("h2");
    title.innerText = text;
    noteTitle.appendChild(title);


    listElement.appendChild(note);
  }
}

function addItens() {
  console.log(Object.keys(arr).length);
  if (inputText.value) {
    arr[Object.keys(arr).length + 1] = inputText.value;
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

function deleteItem(target) {
  delete arr[target];
  localStorage.removeItem(target);
  renderTodo();
  return saveList();
}

function saveList() {
  for (let [index, text] of Object.entries(arr)) {
    localStorage.setItem(index, text);
  }
}

function renderSaveList() {
  if (localStorage.length > 0) {
    const chaves = Object.keys(localStorage);
    const chavesOrdenadas = Array.from(chaves).sort((a, b) =>
      a.localeCompare(b)
    );
    for (let i = 0; i < chavesOrdenadas.length; i++) {
      const chave = chavesOrdenadas[i];
      arr[chave] = localStorage[chave];
    }
  }
}

renderSaveList();

renderTodo();
