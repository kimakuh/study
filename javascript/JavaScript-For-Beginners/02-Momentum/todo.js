const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';
// 해야할 일을 생성할 때마다 toDos라는 array에 추가됨
let toDos = [];





function deleteToDo(event) {
    console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    // console.log(cleanToDos);
    // console.log(toDos);
    toDos = cleanToDos;
    saveToDos();
}


// toDos를 가져와서 로컬에 저장
// 자바스크립트 object를 string 으로 바꿔준다.
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
    console.log(text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } 
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();