const addTasks = document.getElementById("modal-container");
const cancelBtn = document.getElementById("cancel-btn");

const myTask = [];

function addTask() {
  //console.log("inside add function");
  document.getElementById("modal-container").style.display = "flex";
}

function addElement(val, idx) {
  let ele = document.createElement("label");
  // ele.addClass("task-checkbox");
  let input = ele.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "note");

  input.val = val;
  console.log(ele);
  return ele;
}

function hideTask() {
  document.getElementById("modal-container").style.display = "none";
}
let idx = 0;
function addTaskToList() {
  idx++;
  let task1 = document.getElementById("input-task").value;
  myTask.push({ task1, idx });
  document.getElementById("input-task").value = "";
  hideTask();
  console.log(myTask);
  let par = document.getElementById("task-area");
  // console.log(par);
  par.appendChild(addElement(task1, idx));
  //   `<label for="checkbox" class="task-checkbox" key='key-${idx}'>
  //   <input type="checkbox" name="note-1" id="">${task1}
  // </label>`
  // );
  //myTask?.map( (data, index) =>

  // );
}
