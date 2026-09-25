const todos = [];
const RENDER_EVENT = "render-todo";

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

// Memastikan function addTodo berhasil
document.addEventListener(RENDER_EVENT, function () {
  console.log(todos);
});

function addTodo() {
  const textTodo = document.getElementById("title").value;
  const timeStamp = document.getElementById("date").value;

  const generatedID = generatedId();
  const todoObject = generateTodoObject(
    generatedID,
    textTodo,
    timeStamp,
    false,
  );
  todos.push(todoObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function generatedId() {
  return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted,
  };
}

function makeTodo(todoObject) {
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  const textTimeStamp = document.createElement("p");
  textTimeStamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimeStamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);
  container.setAttribute("id", `todo-${todoObject.id}`);

  return container;
}
