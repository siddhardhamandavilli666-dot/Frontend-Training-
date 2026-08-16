const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

searchInput.addEventListener("keyup", displayTasks);

clearBtn.addEventListener("click", function(){

    if(confirm("Delete all tasks?")){

        tasks = [];

        saveTasks();

        displayTasks();

    }

});

function addTask(){

    let text = taskInput.value.trim();

    if(text === ""){

        alert("Please enter a task");

        return;

    }

    tasks.push({

        name:text,

        completed:false

    });

    saveTasks();

    taskInput.value = "";

    displayTasks();

}

function displayTasks(){

    taskList.innerHTML = "";

    let keyword = searchInput.value.toLowerCase();

    let filteredTasks = tasks.filter(function(task){

        return task.name.toLowerCase().includes(keyword);

    });

    filteredTasks.forEach(function(task){

        let index = tasks.indexOf(task);

        let li = document.createElement("li");

        li.className = "list-group-item";

        let span = document.createElement("span");

        span.className = "task-text";

        span.innerText = task.name;

        if(task.completed){

            span.classList.add("completed");

        }

        span.addEventListener("click", function(){

            tasks[index].completed = !tasks[index].completed;

            saveTasks();

            displayTasks();

        });

        let btnGroup = document.createElement("div");

        btnGroup.className = "btn-group";

        let editBtn = document.createElement("button");

        editBtn.className = "btn btn-warning btn-sm";

        editBtn.innerHTML = '<i class="bi bi-pencil"></i>';

        editBtn.addEventListener("click", function(){

            let updatedTask = prompt("Edit Task", task.name);

            if(updatedTask !== null && updatedTask.trim() !== ""){

                tasks[index].name = updatedTask.trim();

                saveTasks();

                displayTasks();

            }

        });

        let deleteBtn = document.createElement("button");

        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';

        deleteBtn.addEventListener("click", function(){

            if(confirm("Delete this task?")){

                tasks.splice(index,1);

                saveTasks();

                displayTasks();

            }

        });

        btnGroup.appendChild(editBtn);

        btnGroup.appendChild(deleteBtn);

        li.appendChild(span);

        li.appendChild(btnGroup);

        taskList.appendChild(li);

    });

    taskCount.innerText = "Total Tasks : " + tasks.length;

}

function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}