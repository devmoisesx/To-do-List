const listElement = document.querySelector(".list");
const inputText = document.querySelector("#text-item");
const addBtn = document.querySelector(".btn-add");
const accordionBtn = document.querySelector(".btn-open-section");
const boxCheckedItems = document.querySelector(".checked-items > .list");

function Task(title, check) {
  this.title = title;
  this.isChecked = check;
}

let array = [];

// Função para criar uma nota
function createNote(index, title, isChecked) {
  const note = document.createElement("li");
  note.classList.add("note");

  const noteUtilities = document.createElement("div");
  noteUtilities.classList.add("utilities-note");

  const utilitieCheck = document.createElement("input");
  utilitieCheck.setAttribute("type", "checkbox");
  utilitieCheck.setAttribute("name", "check");
  utilitieCheck.setAttribute("id", "check");
  utilitieCheck.classList.add("check");
  utilitieCheck.checked = isChecked;
  utilitieCheck.addEventListener("click", () => {
    checkItems(index, utilitieCheck);
  });
  noteUtilities.appendChild(utilitieCheck);

  note.appendChild(noteUtilities);

  const noteTitle = document.createElement("div");
  noteTitle.classList.add("title-note");
  note.appendChild(noteTitle);
  const title2 = document.createElement("h2");
  title2.innerText = title;
  noteTitle.appendChild(title2);

  if (isChecked === true) {
    boxCheckedItems.appendChild(note);
  } else if (isChecked === false) {
    listElement.appendChild(note);
  }
}

function renderTodo() {
  listElement.innerText = "";
  boxCheckedItems.innerText = "";

  for (let [index, { title, isChecked }] of array.entries()) {
    createNote(index, title, isChecked);
  }
}

addBtn.addEventListener("click", addItens);

function addItens() {
  if (inputText.value) {
    array.push(new Task(inputText.value, false));
  }
  renderTodo();
  saveList();
}

inputText.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    // Código da tecla enter
    return addItens();
  }
});

function checkItems(index, utilitieCheck) {
  if (array[index].isChecked === false) {
    utilitieCheck.checked = true;
    array[index].isChecked = true;
  } else if (array[index].isChecked === true) {
    utilitieCheck.checked = false;
    array[index].isChecked = false;
  }
  renderTodo();
  saveList();
}

// // Função para deletar um item
// function deleteItem(target) {
//   const indexInArr = arr.indexOf(target);
//   const indexInCheckedItemsObj = checkedItemsObj.indexOf(target);
//   if (indexInArr !== -1) {
//     arr.splice(indexInArr, 1);
//   } else if (indexInCheckedItemsObj !== -1) {
//     checkedItemsObj.splice(indexInCheckedItemsObj, 1);
//   }
//   localStorage.removeItem(target);
//   renderTodo();
//   return saveList();
// }

function saveList() {
  localStorage.clear();
  let tasks = [];
  for (let [index, object] of array.entries()) {
    tasks.push(JSON.stringify(object));
  }
  localStorage.setItem("tasks", tasks);
}

function renderSaveList() {
  if (localStorage.length > 0) {
    const tasks = JSON.parse(`[${localStorage.getItem("tasks")}]`);
    array = [];
    for (let [index, object] of tasks.entries()) {
      array.push(object);
    }
  }
}

accordionBtn.addEventListener("click", () => {
  accordionBtn.classList.toggle("active");
});

// Renderiza a lista salva e as tarefas
renderSaveList();
renderTodo();
