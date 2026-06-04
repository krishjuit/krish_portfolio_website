const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("you must write something!");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
        {
        e.target.parentElement.remove();
        saveData();
    }
},false);

// document.addEventListener(keydown,(event)=>{
//     if(event.key==="Enter")
//     {
//         addTask();
//     }
// })



function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keydown",(event)=>{
    if(event.key==="Enter")
    {
        addTask();
    }
})

// document.addEventListener("keydown",(event)=>{
//     if(event.key==="Enter")
//     {
//         addTask();
//     }
// })