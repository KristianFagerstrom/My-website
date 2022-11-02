window.onload = form;
function form() {
  var list = document.querySelector("#list"),
    form = document.querySelector("form"),
    item = document.querySelector("#item");

  form.addEventListener(
    "submit",
    function (e) {
      e.preventDefault();
      list.innerHTML += "<li>" + item.value + "</li>";
      store();
      item.value = "";
    },
    false
  );

  list.addEventListener(
    "click",
    function (e) {
      var l = e.target;
      if (l.classList.contains("checked")) {
        l.parentNode.removeChild(l);
      } else {
        l.classList.add("checked");
      }
      store();
    },
    false
  );

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if (!storedValues) {
      list.innerHTML = "";
    } else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
}
