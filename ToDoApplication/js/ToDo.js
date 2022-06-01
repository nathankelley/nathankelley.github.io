import ls from '/ls.js';
import utils from '/utilities.js';

// add event listeners
document.querySelector('#new-todo-button').onclick = newTodo;
document.querySelector('#active-filter').onclick = applyFilter;
document.querySelector('#all-filter').onclick = applyFilter;


// get input
const input = document.querySelector('#new-todo-input');
input.addEventListener('keypress', e=> {
    if (e.keyCode == '13') addNewTodo();
})  

loadTodos();


// Step 0
function loadTodos() {
    document.querySelector('#todos').innerHTML = '';
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    })
}

// Events
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos-container').innerHTML = '';
    loadTodos();
}

// create new todo slot
function newTodo(e) {
    const todo = { id: Date.now(), content: input.value, completed: false };

    // reset input
    input.value = '';
    // add to ui
    const todoItem = createTodoItem(todo);
    // save to local storage
    ls.saveTodo(todo);

    loadTodos();
}

function createTodoItem(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete button
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('todo-content');

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo-id);
    deleteBtn.classList.add('todo-delete-button');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // add to document
    document.querySelector('#todos').appendChild(todoDiv);
}

// apply
function applyFilter(e) {
    // clear the list
    document.querySelector('#todos-container').innerHTML = '';

    // declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // check filter to apply
    if (e.currentTarget.id = 'active-filter'){
        filteredTodos = utils.activeFilter(allTodos);
    } else if (e.currentTarget.id = 'all-filter') {
        filteredTodos = allTodos;
    }

    // draw list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo);
        addtoList(el);
    })
}