// Each itme should look like this
// <li><input type="checkBox"> <span>Write this</span></li>

function addNewItem(list, itemText) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  var span = document.createElement("span");
  span.innerText = itemText;


  list.appendChild(checkBox)
  list.appendChild(span);
  list.appendChild(listItem);

};

var inItemText = document.getElementById("inItemText");
inItemText.focus();

var btnNew = document.getElementById('btnAdd');
inItemText.onkeyup = function(e){

  if (event.which == 13){
    //event.which 13 is enter


    var itemText = inItemText.value;

    if (!itemText || itemText == "" || itemText == " "){
      return false;
    }

    addNewItem(document.getElementById("todoList"), itemText);

    inItemText.focus();
    inItemText.select();

  }


};
