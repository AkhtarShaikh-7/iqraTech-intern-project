const taskForm =
document.getElementById("taskForm");

const taskList =
document.getElementById("taskList");

let tasks = [];

let editIndex = -1;

taskForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const taskName =
    document.getElementById("taskName").value;

    const dueDate =
    document.getElementById("dueDate").value;

    const priority =
    document.getElementById("priority").value;

    const task = {
        taskName,
        dueDate,
        priority
    };

    if(editIndex === -1){

        tasks.push(task);

    }else{

        tasks[editIndex] = task;
        editIndex = -1;

    }

    renderTasks();

    taskForm.reset();

});

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        let priorityClass = "";

        if(task.priority === "High"){
            priorityClass = "priority-high";
        }
        else if(task.priority === "Medium"){
            priorityClass = "priority-medium";
        }
        else{
            priorityClass = "priority-low";
        }

        const card =
        document.createElement("div");

        card.classList.add("task-card");

        card.innerHTML = `

            <h3>${task.taskName}</h3>

            <p>
                <strong>Due Date:</strong>
                ${task.dueDate}
            </p>

            <p>
                <strong>Priority:</strong>

                <span class="${priorityClass}">
                    ${task.priority}
                </span>
            </p>

            <div class="actions">

                <button
                class="edit-btn"
                onclick="editTask(${index})">

                    Edit

                </button>

                <button
                class="delete-btn"
                onclick="deleteTask(${index})">

                    Delete

                </button>

            </div>

        `;

        taskList.appendChild(card);

    });

}

function editTask(index){

    const task = tasks[index];

    document.getElementById("taskName").value =
    task.taskName;

    document.getElementById("dueDate").value =
    task.dueDate;

    document.getElementById("priority").value =
    task.priority;

    editIndex = index;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

function deleteTask(index){

    if(confirm("Delete this task?")){

        tasks.splice(index,1);

        renderTasks();

    }

}