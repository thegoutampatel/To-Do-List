// Adding all element in js
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

// addTask cheack input field is emty or not. then create a Li tag with input value and append in list-Container 
// and create span tag inside the li with inner HTML a CROSS sign 
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something first!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

//this is function is call on the list container item clicked and function according which item is clicked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
});

//This function Remove all the Created Items and save in local storage
function resetList(){
   localStorage.removeItem("data");
   showTask();
}

//this function is used to sage the data of listcontainer in with the help of setItem with local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
 
//This funtion indicated the local storage to get the data from the local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

//this is called function to show the save data which is present in browser memory
showTask();