var list = document.getElementById("list");

function todoapp() {
  var input = document.getElementById("input");

  if (!input.value) {
    var disableed = document.getElementsByClassName("btn");
    disableed.disabled = true;
    return;
  }

  var li = document.createElement("li");
  var inputtextnode = document.createTextNode(input.value);
  li.appendChild(inputtextnode);
  list.appendChild(li);

  var edtbtn = document.createElement("button");
  var edttext = document.createTextNode("edit");
  edtbtn.appendChild(edttext);
  edtbtn.setAttribute("onclick", "edititem(this)");
  edtbtn.setAttribute("class", "edit");
  li.appendChild(edtbtn);

  var delbtn = document.createElement("button");
  var deltext = document.createTextNode("delete");
  delbtn.appendChild(deltext);
  delbtn.setAttribute("onclick", "deleteitem(this)");
  delbtn.setAttribute("class", "del");
  li.appendChild(delbtn);

  input.value = "";
}
function deleteitem(d) {
  d.parentNode.remove();
}
function deleteallitems() {
  list.innerHTML = "";
}
function edititem(t) {
  var change = prompt("edit item you want", t.parentNode.firstChild.nodeValue);
  t.parentNode.firstChild.nodeValue = change;

  // console.log(change);
}
