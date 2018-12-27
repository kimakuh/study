const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


// 로컬스토리지에 유저네임 저장
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


// submit 했을 때 동작제어
// submit의 기본동작을 막는다.
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

//유저네임이 없는 경우 입력받기
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

// 유저네임이 있는경우 greeting 메세지
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


// 로컬스토리지에서 유저네임을 가져온다
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // 유저가 없는 경우
        askForName();
    } else {
        // 유저가 있는 경우
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();