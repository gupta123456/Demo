document.getElementById('container').innerHTML = "<div class='controls'><h1><i>My To-do</i></h1><input type='text' name='task' id='input' onkeypress='return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)'><br><button type='button' id='add' class='btn btn-primary'>Add Task</button><button type='button' id='done' class='btn btn-success'>Done</button><button type='button' id='remove'class='btn btn-danger'>Remove Task</button></div><ol type='1' id='list'></ol>";   
var ul = document.getElementById('list');
var li;
var index;
var addButton = document.getElementById('add');
addButton.addEventListener("click", addItem);
var arr = [];


//Adding task to todolist
function addItem() 
{
    var item = document.getElementById('input').value;
    var textNode = document.createTextNode(item);
    if (item == '') 
    {
        msg = "Enter any task first!!";
        alert(msg);
        return false;
    }
    else if(arr.includes(item))
    {
        alert("Task already exists!!");
        return false;
    }
    else 
    {
        arr.unshift(item);
        console.log(arr);

        //Time
        var a = new Date();
        var hrs = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var e = hrs + ":" + min + ":" + sec;

        var span_1 = document.createElement('span');
        span_1.setAttribute('id', 'span1');
        li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('class', ',mycheck');
        span_1.innerText = textNode;
        li.appendChild(checkbox);
        li.appendChild(span_1);
        li.appendChild(textNode);
        span_1.innerText = e;
        li.appendChild(span_1);
        ul.insertBefore(li, ul.childNodes[0]);
        document.getElementById('input').value = " ";
    }
}


//Modal
var mdiv=document.createElement("div");
mdiv.setAttribute("id","mdiv");
mdiv.setAttribute("style","display: none;position: fixed; z-index: 1;padding-top: 100px; left: 0;top: 0;width: 100%; height: 100%; overflow: auto;background-color: rgba(0,0,0,0.4); ")
document.getElementById("body1").appendChild(mdiv);

var mpara=document.createElement("p");
mpara.innerHTML="DO YOU WANT TO DELETE THE SELECTED TASK?";
mpara.setAttribute("style"," background-color: #fefefe;margin: auto;color:red;font-size:large;padding:40px;border: 1px solid #888;width: 60%;");
mdiv.appendChild(mpara);

var mbtn=document.createElement("button");
mbtn.innerHTML="Delete";
mbtn.setAttribute("style","margin-left:10px;float:right;margin-top:25px;");
mbtn.className='btn btn-danger';
mbtn.addEventListener("click",removeItem);
mpara.appendChild(mbtn);

var mbtn1=document.createElement("button");
mbtn1.innerHTML="Cancel";
mbtn1.setAttribute("style","float:right;margin-top:25px;");
mbtn1.className='btn btn-info';
mbtn1.addEventListener("click",modalclose);
mpara.appendChild(mbtn1);


function modal_open()
{
    document.getElementById("mdiv").style.display="block";
}
function modalclose()
{
    document.getElementById("mdiv").style.display="none";
}

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',modal_open);


//Line-Through
var doneButton = document.getElementById('done');
doneButton.addEventListener('click', line);
function line() 
{
    li = ul.children;
    var c = arr.length;
    for (index = 0; index < c; index++) 
    {
        if (li[index] && li[index].children[0].checked) 
        {
            li[index].style.setProperty("text-decoration", "line-through");
        }
    }
}


//Remove task
function removeItem() 
{
    console.log(arr.shift());
    li = ul.children;
    for (index = 0; index < li.length; index++) 
    {
        const element = li[index];
        if (li[index] && li[index].children[0].checked) 
        {
            ul.removeChild(li[index]);
        }
    }
    modalclose();
}