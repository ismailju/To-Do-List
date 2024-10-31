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
  saveTasks(); //added savetask to save the array into localstorage
  todoInput.value = ""; //clear the input
  console.log(newtask);
});

function renderTask(task) {
  //render task in browser/dom
  console.log(task);
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
