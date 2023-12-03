get();
// var ls=[];
var list = document.getElementById("lst");
document.getElementById("btn").addEventListener("click", addTask);
// window.addEventListener("load",get);
// document.getElementById("btn").addEventListener("click", get);
function addTask() {
    let litem = document.getElementById("input-box").value;
    console.log(litem);
    let itm = document.createTextNode(litem);
    var del = document.createElement("button");
    del.addEventListener("click",()=>delt(element.todo));
    del.innerText = "delete";
    var li = document.createElement("li");
    li.appendChild(itm);
    li.appendChild(del);
    list.appendChild(li);
    var ls = [];
    if (localStorage.getItem("todos") !== null) {
        ls = JSON.parse(localStorage.getItem("todos"));
    }

    let item = { todo: litem };
    ls.push(item);
    localStorage.setItem("todos", JSON.stringify(ls));
    get();
}
function get() {
    var list = document.getElementById("lst");
    list.innerHTML = "";
    if (localStorage.getItem("todos") !== null) {
        var myobj = JSON.parse(localStorage.getItem("todos"));
        console.log(myobj);
        myobj.forEach(element => {
            var my_list = document.createElement("li");
            let itm = document.createTextNode(element.todo);
            list.appendChild(my_list);
            var del = document.createElement("button");
            del.addEventListener("click",(event)=>{
                console.log(event.target);
                delt(element.todo);
            });
            del.innerText = "delete";
            my_list.appendChild(itm);
            my_list.appendChild(del);
            list.appendChild(my_list);
        });
    }
}
//delete
function delt(task){
    var myobj = JSON.parse(localStorage.getItem("todos"));
    var updatedList = myobj.filter(element => element.todo !== task);
    localStorage.setItem("todos", JSON.stringify(updatedList));
    get(); // Refresh the display
}