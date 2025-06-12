// Store all tasks
const tasks = [];

// Add button event
document.querySelector("#addBtn").addEventListener("click", () => {
  const task = document.querySelector("#taskInput").value.trim();
  if (task) {
    tasks.push(task); // Add task to array
    renderTasks(); // Update UI
    document.querySelector("#taskInput").value = ""; // Clear input
  }
});

// Render tasks in the list
function renderTasks() {
  const list = document.querySelector("#taskList");
  list.innerHTML = ""; // Clear old list

  tasks.map((t, i) => {
    list.innerHTML += `<li> ${t}
          <button onclick="deleteTask(${i})">X</button>
          </li>`;
  });
}

// Delete task by index
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from array
  renderTasks(); // Update list
}
