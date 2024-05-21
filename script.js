// const listElement = document.querySelector(".list");
// const inputText = document.querySelector("#text-item");
// const addBtn = document.querySelector(".btn-add");
// const accordionBtn = document.querySelector(".btn-open-section");
// const boxCheckedItems = document.querySelector(".checked-items");

// let arr = {};
// let checkedItemsObj = {};

// // function renderTodo() {
// //   listElement.innerText = "";

// //   for (let [index, text] of Object.entries(arr)) {
// //     const note = document.createElement("li");
// //     note.classList.add("note");

// //     const noteUtilities = document.createElement("div");
// //     noteUtilities.classList.add("utilities-note");

// //     const utilitieCheck = document.createElement("input");
// //     utilitieCheck.setAttribute("type", "checkbox");
// //     utilitieCheck.setAttribute("name", "check");
// //     utilitieCheck.setAttribute("id", "check");
// //     utilitieCheck.classList.add("check");
// //     utilitieCheck.addEventListener("click", () =>
// //       checkItems(index, utilitieCheck)
// //     );
// //     // utilitieCheck.addEventListener("click", () => checkItem(index));
// //     noteUtilities.appendChild(utilitieCheck);

// //     // const utilitieDelete = document.createElement("span");
// //     // utilitieDelete.innerText = "x";
// //     // utilitieDelete.classList.add("delete");
// //     // utilitieDelete.addEventListener("click", () => deleteItem(index));
// //     // noteUtilities.appendChild(utilitieDelete);

// //     note.appendChild(noteUtilities);

// //     const noteTitle = document.createElement("div");
// //     noteTitle.classList.add("title-note");
// //     note.appendChild(noteTitle);
// //     const title = document.createElement("h2");
// //     title.innerText = text;
// //     noteTitle.appendChild(title);

// //     listElement.appendChild(note);
// //   }

// //   for (let [index, text] of Object.entries(checkedItemsObj)) {
// //     const note = document.createElement("li");
// //     note.classList.add("note");

// //     const noteUtilities = document.createElement("div");
// //     noteUtilities.classList.add("utilities-note");

// //     const utilitieCheck = document.createElement("input");
// //     utilitieCheck.setAttribute("type", "checkbox");
// //     utilitieCheck.setAttribute("name", "check");
// //     utilitieCheck.setAttribute("id", "check");
// //     utilitieCheck.classList.add("check");
// //     utilitieCheck.addEventListener("click", () =>
// //       checkItems(index, utilitieCheck)
// //     );
// //     // utilitieCheck.addEventListener("click", () => checkItem(index));
// //     noteUtilities.appendChild(utilitieCheck);

// //     // const utilitieDelete = document.createElement("span");
// //     // utilitieDelete.innerText = "x";
// //     // utilitieDelete.classList.add("delete");
// //     // utilitieDelete.addEventListener("click", () => deleteItem(index));
// //     // noteUtilities.appendChild(utilitieDelete);

// //     note.appendChild(noteUtilities);

// //     const noteTitle = document.createElement("div");
// //     noteTitle.classList.add("title-note");
// //     note.appendChild(noteTitle);
// //     const title = document.createElement("h2");
// //     title.innerText = text;
// //     noteTitle.appendChild(title);

// //     boxCheckedItems.appendChild(note);
// //   }
// // }

// function createNote(index, text, isChecked, parentElement) {
//   const note = document.createElement("li");
//   note.classList.add("note");

//   const noteUtilities = document.createElement("div");
//   noteUtilities.classList.add("utilities-note");

//   const utilitieCheck = document.createElement("input");
//   utilitieCheck.setAttribute("type", "checkbox");
//   utilitieCheck.setAttribute("name", "check");
//   utilitieCheck.setAttribute("id", "check");
//   utilitieCheck.classList.add("check");
//   utilitieCheck.checked = isChecked;
//   utilitieCheck.addEventListener("click", () =>
//     checkItems(index, utilitieCheck)
//   );
//   noteUtilities.appendChild(utilitieCheck);

//   note.appendChild(noteUtilities);

//   const noteTitle = document.createElement("div");
//   noteTitle.classList.add("title-note");
//   note.appendChild(noteTitle);
//   const title = document.createElement("h2");
//   title.innerText = text;
//   noteTitle.appendChild(title);

//   parentElement.appendChild(note);
// }

// function renderTodo() {
//   listElement.innerText = "";
//   boxCheckedItems.innerText = "";

//   for (let [index, text] of Object.entries(arr)) {
//     createNote(index, text, false, listElement);
//   }

//   for (let [index, text] of Object.entries(checkedItemsObj)) {
//     createNote(index, text, true, boxCheckedItems);
//   }
// }

// addBtn.addEventListener("click", addItens);

// function addItens() {
//   if (inputText.value) {
//     arr[Object.keys(arr).length + 1] = inputText.value;
//   }
//   renderTodo();
//   return saveList();
// }

// inputText.addEventListener("keyup", function (e) {
//   var key = e.which || e.keyCode;
//   if (key == 13) {
//     // codigo da tecla enter
//     return addItens();
//   }
// });

// function checkItems(index, utilitieCheck) {
//   utilitieCheck.checked = !!utilitieCheck.checked;
//   if (arr[index] !== undefined && arr[index] !== checkedItemsObj[index]) {
//     checkedItemsObj[Object.keys(checkedItemsObj).length + 1] = arr[index];
//     delete arr[index];
//   } else if (checkedItemsObj[index] !== undefined) {
//     delete checkedItemsObj[index];
//   }
//   renderTodo();
//   console.log(checkedItemsObj);
// }

// function deleteItem(target) {
//   delete arr[target];
//   localStorage.removeItem(target);
//   renderTodo();
//   return saveList();
// }

// function saveList() {
//   for (let [index, text] of Object.entries(arr)) {
//     localStorage.setItem(index, text);
//   }
// }

// function renderSaveList() {
//   if (localStorage.length > 0) {
//     const chaves = Object.keys(localStorage);
//     const chavesOrdenadas = Array.from(chaves).sort((a, b) =>
//       a.localeCompare(b)
//     );
//     for (let i = 0; i < chavesOrdenadas.length; i++) {
//       const chave = chavesOrdenadas[i];
//       arr[chave] = localStorage[chave];
//     }
//   }
// }

// accordionBtn.addEventListener("click", () => {
//   accordionBtn.classList.toggle("active");
// });

// renderSaveList();

// renderTodo();

// Seleciona os elementos do DOM

// ======================================================
// ======================================================
// ======================================================

const listElement = document.querySelector(".list");
const inputText = document.querySelector("#text-item");
const addBtn = document.querySelector(".btn-add");
const accordionBtn = document.querySelector(".btn-open-section");
const boxCheckedItems = document.querySelector(".checked-items");

function Task(title, description, check) {
  this.title = title;
  this.description = description;
  this.isChecked = check;
}

let array = [];

// Função para criar uma nota
function createNote(index, title, description, isChecked) {
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

  for (let [index, { title, description, isChecked }] of array.entries()) {
    createNote(index, title, description, isChecked);
  }
}

addBtn.addEventListener("click", addItens);

function addItens() {
  if (inputText.value) {
    array.push(new Task(inputText.value, null, false));
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
    const tasks = JSON.parse(`[${localStorage.getItem("tasks")}]`)
    array = []
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
