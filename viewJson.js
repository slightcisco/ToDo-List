//Retrieving data:

function addNewItem(list, itemText) {
  var listItem = document.createElement("li");
  var name = document.createElement("span");
  name.innerText = itemText;
  var age = document.createElement("span");
  age.innerText = itemText;
  var city = document.createElement("span");
  city.innerText = itemText;


  listItem.appendChild(checkBox)
  listItem.appendChild(span);
  listItem.appendChild(age);
  listItem.appendChild(city);
  list.appendChild(listItem);

};

var text = localStorage.getItem("testJSON");
var obj = JSON.parse(text);
var count = Object.keys(text).length;
alert(count);

for (var i = 0; i < count; i++) {
  addNewItem(document.getElementById("jsonList"), obj.name[1],);
}
