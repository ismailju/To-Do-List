const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

tasks = [];

addTaskButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  if (taskText === "") return;
  const newtask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newtask);
  todoInput.value = "";//clear the input
  console.log(newtask);
  
});
