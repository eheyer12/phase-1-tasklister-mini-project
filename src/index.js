document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", (e) => {
    e.preventDefault();
    let b = document.getElementById('new-task-description');
    todoList(b.value);
  })
});

function todoList(todo){
  let p = document.createElement("p");
  p.textContent = todo;
  document.getElementById('tasks').appendChild(p);
  
}