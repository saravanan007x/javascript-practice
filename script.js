
let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");

// Date concept
const today = new Date();

document.getElementById("today").textContent =
    today.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

function getTodayString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

taskDate.value = getTodayString();

// Add a task using push()
document.getElementById("addBtn").addEventListener("click", function () {
    const name = taskInput.value.trim();
    const date = taskDate.value;

    if (name === "" || date === "") {
        alert("Enter a task and select a date!");
        return;
    }

    tasks.push({
        id: Date.now(),
        name: name,
        date: date,
        completed: false
    });

    taskInput.value = "";
    displayTasks();
});

// Display tasks using filter() and map()
function displayTasks() {
    const selectedDate = taskDate.value;

    const filteredTasks = tasks.filter(function (task) {
        return task.date === selectedDate;
    });

    taskList.innerHTML = filteredTasks.map(function (task) {
        return `
            <li>
                <span class="${task.completed ? "done" : ""}">
                    ${task.name} (${task.date})
                </span>

                <div>
                    <button onclick="toggleTask(${task.id})">
                        ${task.completed ? "Undo" : "Done"}
                    </button>

                    <button class="delete"
                        onclick="deleteTask(${task.id})">
                        Delete
                    </button>
                </div>
            </li>
        `;
    }).join("");

    // Array methods: filter()
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);

    document.getElementById("total").textContent = tasks.length;
    document.getElementById("completed").textContent =
        completedTasks.length;
    document.getElementById("pending").textContent =
        pendingTasks.length;
}

// Change task status
function toggleTask(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = !task.completed;
    }

    displayTasks();
}

// Delete using findIndex() and splice()
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }

    displayTasks();
}

// Refresh the task list when the date changes
taskDate.addEventListener("change", displayTasks);

displayTasks();
