function addUIItem(txt) {
  let li = document.createElement("li");
  li.innerHTML = txt;
  list.insertBefore(li, list.childNodes[0]);
  const dldbutton = document.createElement("button");
  dldbutton.textContent = "x";
  dldbutton.classList.add("fas", "fa-trash-alt");
  li.appendChild(dldbutton);
  dldbutton.addEventListener("click", (e) => {
    li.parentNode.removeChild(li);
    savedTasks = savedTasks.filter((e) => e !== txt);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  });
}
let input = document.querySelector("#tdn");
let btn = document.querySelector("#add");
let list = document.querySelector("#list");
// load saved tasts
let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// add UI elements for any saved task
savedTasks.forEach(addUIItem);

add.addEventListener("click", () => {
  let txt = input.value;
  if (txt === "") {
    alert("Please write something to do and find the easter egg in the site");
  } else {
    savedTasks.push(txt);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    input.value = "";
    addUIItem(txt);
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});
