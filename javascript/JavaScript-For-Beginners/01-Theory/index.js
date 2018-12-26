//alert('Im Working. Im JS. Im Beautiful. Im worth it');

// console.log('Im Working. Im JS. Im Beautiful. Im worth it');


// const title = document.getElementById("title");
// const title = document.querySelector("#title");

// console.log(title);
// console.log(document);
// console.dir(title);
// console.dir(document);

// title.innerHTML = "Hi! JS";
// title.style.color = "red";

// document.title = "HELLO!"



// const title = document.querySelector("#title");

// function handleResize() {
//     console.log("I have been resized");
// }


// window.addEventListener("resize", handleResize);
// ==> handleResize() 하면 필요할 때가 아니라 바로 호출



// const title = document.querySelector("#title");

// function handleClick() {
//     title.style.color = "blue";
// }


// title.addEventListener("click", handleClick);



// const age = prompt("How old are you");


// if (age >= 18 && age <= 21) {
//     console.log("you can drink but you should not");
// } else if(age > 21) {
//     console.log("go ahead");
// } else {
//     console.log('too young');
// }



// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     console.log(currentColor);

//     if(currentColor === BASE_COLOR) { // 만약 현재의 색깔이 기본색과 같다면
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }


// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

// function handleOffline() {
//     console.log("offline");
// }

// function handleOnline() {
//     console.log("online");
// }


// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);



// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const currentClass = title.className;
//     console.log(currentClass);

//     if (currentClass !== CLICKED_CLASS) {
//         title.className = CLICKED_CLASS;
//     } else {
//         title.className = "";
//     }
// }




// function init() {
//     title.addEventListener("click", handleClick);
// }

// init();



// const title = document.querySelector("#title");

// const CLICKED_CLASS = "clicked";

// function handleClick() {

//     const hasClass = title.classList.contains(CLICKED_CLASS);

//     if (hasClass) {
//         title.classList.remove(CLICKED_CLASS);
//     } else {
//         title.classList.add(CLICKED_CLASS);
//     }
// }




// function init() {
//     title.addEventListener("click", handleClick);
// }

// init();



const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS); // toggle 함수 안에 있는 값을 체크
}




function init() {
    title.addEventListener("click", handleClick);
}

init();
