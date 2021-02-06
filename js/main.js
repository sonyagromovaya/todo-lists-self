const inputRef = document.querySelector(".js-todo-field");
const todoListRef = document.querySelector(".js-todo-list");
const btnRef = document.querySelector(".js-add-todo");

btnRef.addEventListener("click", todoHandler);

inputRef.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    return todoHandler();
  }
});
function todoHandler() {
  const todo = document.createElement("p");
  todo.textContent = inputRef.value;
  inputRef.value = "";
  todoListRef.prepend(todo);
}

todoListRef.addEventListener("click", (e) => {
  e.target.classList.toggle("todo-done");
});
todoListRef.addEventListener("dblclick", (e) => {
  if (!e.nodeName === "P") return;
  e.target.remove();
});
