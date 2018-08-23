var myList = document.getElementsByClassName("list-group-item");

for(var i=0; i<myList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var div;

for(var i=0; i<close.length; i++){
    close[i].onclick = function(){
        div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);


function addElement(){
    var li = document.createElement('li');
    li.classList.toggle('list-group-item');
    var inputValue = document.getElementById("input").value;
    
    if(inputValue===''){
        alert("Field can't be empty");
    } else {
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        document.getElementById("toDo").appendChild(li);
    }
    
    document.getElementById("input").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(var i=0; i<close.length; i++){
    close[i].onclick = function(){
        div = this.parentElement;
        div.style.display = "none";
        }
    }
}

document.getElementById("input").addEventListener("keyup", function(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    document.getElementById("btn").click();
  }
});