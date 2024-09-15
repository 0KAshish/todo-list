const addTasks = document.getElementById("modal-container");
const cancelBtn = document.getElementById("cancel-btn");

const myTask = [];

function addTask() {
  document.getElementById("modal-container").style.display = "flex";
}

function hideTask() {
    document.getElementById("modal-container").style.display = "none";
  }

function addElement(val, idx) {
  let ele = document.createElement("label");
  ele.classList.add("task-checkbox");
  ele.innerHTML = `<input type="checkbox" name="note-1" id="">${val}`;
//   let input = document.createElement("input");
//   input.setAttribute("type", "checkbox");
//   input.setAttribute("name", "note");
//   input.val = val;
  return ele;
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
  par.appendChild(addElement(task1, idx));

}
