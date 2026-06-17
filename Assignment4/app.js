const formInput = document.getElementById("formInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const message = document.getElementById("message");
const form = document.getElementById("form");

let todos = [];

const updateMessage = (text) => (message.innerText = text);

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    todoList.innerHTML += `
            <div class="todo-item">
                <p class="todo-text">${todo}</p>
                <div>
                    <button onclick="deleteTodo(${index})" ><img src="/icons/delete.svg" alt="delete icon"  /></button>
                    <input type="checkbox" />
                </div>
          </div>
        `;
  });
}

function addTodo(e) {
  e.preventDefault();
  if (formInput.value.trim() === "") {
    updateMessage("You must add a todo");
    return;
  }

  todos.push(formInput.value);


  formInput.value = "";

  renderTodos();

  updateMessage("");
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

todoList.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const todoItem = e.target.closest(".todo-item");
    const text = todoItem.querySelector(".todo-text");

    text.classList.toggle("completed");
  }
});

form.addEventListener("submit", addTodo);
