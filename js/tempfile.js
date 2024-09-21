// function to show all the to-do present in the myTask list
const renderTodo = () => {
	document.getElementById('task-area').innerHTML = myTask.map(fun);
}

function fun(x) {
	return `<div key=${x.idx}>`+	
	`<input type="checkbox" name="note-1" id="task-${x.idx}">${x.task1}`+
		`<div class="updelbtn">`+
			`<button onclick="delBtn(${x.idx})" class="delbtn">Delete</button>`+
			`<button onclick="upBtn(${x.idx})" class="upbtn">Update</button>`+
		`</div>`+
	`</div>`;
}




let searchItem = document.getElementById("search").value
	if(searchItem == ""){
		alert("Please enter text to find task")
	}else{ 
		searchTaskList.push(searchItem)}
		console.log(searchTaskList)

	for(let i=0; i< myTask.length; i++){
		if(searchItem == myTask[i].task1){
	 		alert(searchItem)
	 	}else {
			alert("Task not found")
		}
}