const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

// 현재시간 가져오기
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // 만약 시가 10보다 작으면 0을 포함한 시를 리턴
    // 만약 분이 10보다 작으면 0을 포함한 분을 리턴
    // 만약 초가 10보다 작으면 0을 포함한 초를 리턴
    // 삼항연산자는 작은if
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();