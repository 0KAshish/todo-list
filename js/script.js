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
let temparr= []
let idx = 0;

// function to show all the to-do present in the myTask list
const renderTodo = (_mytask) => {
	document.getElementById('task-area').innerHTML = _mytask.map(({ idx, task1 }) =>
			  `<div key=${idx} class>`+	
			  	`<input type="checkbox" name="note-1" id="task-${idx}">${task1}`+
			  		`<div class="updelbtn">`+
			  			`<button onclick="delBtn(${idx})" class="delbtn">Delete</button>`+
			  			`<button onclick="upBtn(${idx})" class="upbtn">Update</button>`+
					`</div>`+
				`</div>`
			).join('');
}


// function to add the task in the to-do array / list
function addTaskToList() {
	idx++;
	let task1 = document.getElementById("input-task").value;
	if (task1.trim() == 0) {
		alert("please add task")
	} else {
		myTask.push({ task1, idx });
		document.getElementById("input-task").value = "";
		hideTask();
		renderTodo(myTask);
	}
}


let currUpdateIdx = -1;
// function to find index
function findTask(arr, idx) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].idx == idx) {
			return arr[i].task1;
		}
	}
	return "";
}

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

function updateToList() {
	let uptask = document.getElementById("update-task").value;
	console.log(uptask);
	if (uptask.trim().length == 0) {
		alert("Task not updated")
		return;
	}

	// where to change in array (where idx = currUpdateIdx)
	for (let i = 0; i < myTask.length; i++) {
		if (myTask[i].idx == currUpdateIdx) {
			myTask[i].task1 = uptask;
		}
	}

	// now array is updated, have to show at dom
	renderTodo(myTask);

	// close the modal
	uhideTask();
}

function delBtn(idx){
	let currTask = findTask(myTask, idx)
	let selectedEle = myTask.findIndex(data=>data.idx === idx) 
	if(selectedEle > -1){
		myTask.splice(selectedEle ,1)
	}
	renderTodo(myTask)
}

function searchTask(){
	let searchValue = document.getElementById('search').value
	const findTask = myTask.filter((data, index)=>{return data.task1.includes(searchValue)})
	temparr = [...findTask]
	renderTodo(temparr)
}
