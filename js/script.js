//const addTasks = document.getElementById("modal-container");
//const cancelBtn = document.getElementById("cancel-btn");

function addTask() {
	document.getElementById("modal-container").style.display = "flex";
}

function hideTask() {
	document.getElementById("modal-container").style.display = "none";
}
function uhideTask() {
	document.getElementById("update-modal-container").style.display = "none";
}


const myTask = [];

function addElement() {
	let ele = document.createElement("label");
	ele.classList.add("task-checkbox");
	ele.innerHTML =
			myTask.map(({idx, val} , index)=> `<input type="checkbox" name="note-1" id="task-${idx}">${val}
                  <div class="updelbtn">
                  <button onclick="delBtn(${idx})" class="delbtn">Delete</button>
                  <button onclick="upBtn(${idx})" class="upbtn">Update</button></div>`)
	return ele;
}

function showAllTasks() {

}



let idx = 0;
function addTaskToList() {
	idx++;
	let task1 = document.getElementById("input-task").value;
	if (task1.trim() == 0) {
		alert("please add task")
	} else {
		myTask.push({ task1, idx });
		document.getElementById("input-task").value = "";
		hideTask();
		// console.log(myTask);
		// let par = document.getElementById("task-area");
		// par.appendChild(addElement(task1, idx));
		renderTodo()
	}
}


let currUpdateIdx = -1;

// this will validate the index, and open the update modal
function upBtn(idx) {
	let currTask = findTask(myTask, idx);
	if (currTask.length == 0) {
		alert('Task not found');
		return;
	}
	currUpdateIdx = idx;
	document.getElementById("update-modal-container").style.display = "flex";
	document.getElementById('update-task').value = currTask;
	
}

// function to find index
function findTask(arr, idx) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].idx == idx) {
			return arr[i].task1;
		}
	}
	return "";
}

function updateToList() {
	let uptask = document.getElementById("update-task").value;
	console.log(uptask);
	if (uptask.trim().length == 0) {
		alert("Task not updated")
		return;
	}
	console.log(uptask);


	// where to change in array (where idx = currUpdateIdx)
	for(let i = 0; i < myTask.length; i++) {
		if(myTask[i].idx == currUpdateIdx) {
			myTask[i].task1 = uptask;
		}
	}
	console.log(myTask);


	// now array is updated, have to show at dom
	renderTodo();

	// close the modal
	uhideTask();
}

const renderTodo=()=>{
	document.getElementById('task-area').innerHTML = myTask?.map(({idx, task1},index)=>`<input type="checkbox" name="note-1" id="task-${idx}">${task1}
			  <div class="updelbtn">
			  <button onclick="delBtn(${idx})" class="delbtn">Delete</button>
			  <button onclick="upBtn(${idx})" class="upbtn">Update</button></div>`)
}