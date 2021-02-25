document.querySelector('form').addEventListener('submit', submitBtn);

function submitBtn(element) {
    element.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
            <span class="todo-item">${todo}</span>
            <button name="checkButton">Check</button>
            <button name="inProgressButton">Current</button>
            <button name="deleteButton">Delete</button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

document.querySelector('ul').addEventListener('click', checkDeleteBtn);

function checkDeleteBtn(element) {
    if (element.target.name == 'checkButton')
        checkTodo(element);

    if (element.target.name == 'deleteButton')
        deleteTodo(element);

    if (element.target.name == 'inProgressButton')
        progressTodo(element);
}

function checkTodo(element) {
    let item = element.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(element) {
    let item = element.target.parentNode;
    
    item.style.display = "none"
}

function progressTodo(element) {
    let item = element.target.parentNode;
    
    if (item.style.color == 'rgb(255, 255, 0)')
        item.style.color = 'rgb(0, 0, 0)';
    else
        item.style.color = 'rgb(255, 255, 0)';
}

document.getElementById('clearAll').addEventListener('click', clearAllBtn);

function clearAllBtn(element) {
    document.querySelector('ul').innerHTML = '';
}

