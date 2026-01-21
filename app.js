/ var main = document.getElementById("main");
 function add() {
     var para = document.createElement("p");
     var paraText = document.createTextNode("abid")
     para.appendChild(paraText);
     main.appendChild(para);
 }

var main = document.getElementById("main");
var inp = document.getElementById("inp");
function add() {
    console.log(inp.value);
   if (inp.value == "") {
    alert ( "Please TODO"); 
   } else  {
    var li = document.createElement ("li"); 
    var liText = document.createTextNode (inp.value);
    li.appendChild(liText);
    
    var editBtn = document.createElement("BUTTON");
    var editbtnText = document.createTextNode ("EDIT TODO list");
    editBtn.appendChild (editbtnText);
    editBtn.setAttribute ("onclick" , "edittodo(this)");
    li.appendChild (editBtn);

    main.appendChild(li);
    inp.value = "";
}
}  
 
function editTodo(element) {
    var newvalue = prompt("enter updated value", element.parentNode.firstChild.nodevalue);
    console.log(element.parentNode.firstChild.nodevalue);
    element.parentNode.firstChild.nodevalue = newvalue;
}
function delTodo(element) {
    element.parentNode.remove();
    console.log();
}
function delAll() {
    main.innerHTML = "";
}
 
 function editTodo() {
     console.log("function...");
 }
