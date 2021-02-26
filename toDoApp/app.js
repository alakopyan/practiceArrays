document.querySelector("form").addEventListener("submit", submitBtn);

function submitBtn(event) {
  event.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  const span = document.createElement("span")
  span.innerHTML = todo;
  li.appendChild(span)

  const button = document.createElement("button");
  button.innerText = "Delete";

  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.classList.add("todo-list-item");

  li.addEventListener("click", () => {
  
    if (li.style.textDecoration == "line-through")
      li.style.textDecoration = "none";
    else li.style.textDecoration = "line-through";
  });
  ul.appendChild(li);
}

document.querySelector("ul").addEventListener("click", checkDeleteBtn);

function checkDeleteBtn(event) {
  if (event.target.name == "deleteButton") deleteTodo(event);
}

function deleteTodo(event) {
  let listItem = event.target.parentElement;
  listItem.parentElement.removeChild(listItem);
}

document.getElementById("clearAll").addEventListener("click", clearAllBtn);

function clearAllBtn(event) {
  document.querySelector("ul").innerHTML = "";
}
