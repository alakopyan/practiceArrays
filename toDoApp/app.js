document.querySelector("form").addEventListener("submit", submitBtn);

function submitBtn(element) {
  element.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
            <span class="todo-item">${todo}</span>
            <button name="deleteButton">Delete</button>
    `;
  li.classList.add("todo-list-item");
  li.addEventListener("click", () => {
    if (li.style.textDecoration == "line-through")
      li.style.textDecoration = "none";
    else li.style.textDecoration = "line-through";
  });
  ul.appendChild(li);
}

document.querySelector("ul").addEventListener("click", checkDeleteBtn);

function checkDeleteBtn(element) {
  if (element.target.name == "deleteButton") deleteTodo(element);
}

function deleteTodo(element) {
  let item = element.target.parentNode;

  item.style.display = "none";
}

document.getElementById("clearAll").addEventListener("click", clearAllBtn);

function clearAllBtn(element) {
  document.querySelector("ul").innerHTML = "";
}
