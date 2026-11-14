
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(function(task, index) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.name;

        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        };

        let button = document.createElement("button");
        button.textContent = "Delete";
        button.classList.add("delete");

        button.onclick = function() {
            tasks.splice(index, 1);
            saveTasks();
        };

        li.appendChild(span);
        li.appendChild(button);

        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: input.value.trim(),
        completed: false
    });

    input.value = "";

    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();
