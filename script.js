const createTaskBtn = document.getElementById("create-task-btn");
const calendar = document.getElementById("calendar");
const createTaskModal = document.getElementById("add-task-container");

createTaskBtn.addEventListener("click", () => {
    calendar.style.display = "none";
    createTaskModal.style.display = "flex"; 
})

// const taskData = [];

// task.addEventListener('submit', (e) => {
//     e.preventDefault();
// })

// const addTaskBtn = document.getElementById("add-btn");
// const taskInput = document.getElementById("task-added");
// const deleteBtn = document.getElementById("cancel-btn");


// function addTask() {
//     if(taskInput.value === "") {
//         alert("Plese input a To-Do Task");
//     } else {
//         let div = document.createElement("div");
//     }
// }


document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const taskDescription = document.getElementById("task-added").value.trim();
    const taskDay = document.getElementById("task-day").textContent.trim();
    const taskStartTime = document.getElementById("task-start-time").textContent.replace(/\s+/g, ' ').trim();
    const taskEndTime = document.getElementById("task-end-time").textContent.replace(/\s+/g, ' ').trim();

    if (taskDescription === "") {
        alert("Please input a todo task");
        return;
    }

    const taskWrapper = document.createElement("div");

    const taskMain = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "complete";  

    const taskInfo = document.createElement("div");

    const title = document.createElement("h4");
    title.textContent = taskDescription;

    const time = document.createElement("p");
    time.textContent = `${taskStartTime} - ${taskEndTime}`;

    taskInfo.appendChild(title);
    taskInfo.appendChild(time);

    taskMain.appendChild(checkbox);
    taskMain.appendChild(taskInfo);

    const day = document.createElement("p");
    day.textContent = taskDay;

    taskWrapper.appendChild(taskMain);
    taskWrapper.appendChild(day);


    document.querySelector(".task-contents").appendChild(taskWrapper);

    document.getElementById("task-added").value = "";
    saveData();
}

function saveData() {
    localStorage.setItem("data", document.querySelector(".task-contents").innerHTML);
}

function showTask() {
    document.querySelector(".task-contents").innerHTML = localStorage.getItem("data");
}

showTask();





























