// 컴퓨터 오브젝트
var computer = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
};

// 사용자 오브젝트
var user = {
    score: 0,
    percent2: 0.5,
    percent3: 0.33
};

// 게임 오브젝트
var game = {
    isComputerTurn: true,
    shotLeft: 15
};









// 컴퓨터 슛하기 버튼 클릭 이벤트 핸들러
function onComputerShoot() {

    if (!game.isComputerTurn)
        return;

    updateAI();

    // var textElem = document.getElementById('text');

    // var comScoreElem = document.getElementById('computer-score');
    var shootType = Math.random() < 0.5 ? 2 : 3; // 삼항연산자 참 ==> 2 / 거짓 ==> 3


    if (Math.random() < computer['percent' + shootType]) {
        showText('컴퓨터가 ' + shootType + '점슛을 성공시켰습니다.');
        updateComputerScore(shootType);
    } else {
        // 실패 시
        showText('컴퓨터가' + shootType + '점슛을 실패했습니다.');
    }


    game.isComputerTurn = false;

    disableComputerButtons(true);
    disableUserButtons(false);


}



function onUserShoot(shootType) {

    if (game.isComputerTurn)
        return;



    // var textElem = document.getElementById('text');
    //  var userScoreElem = document.getElementById('user-score');


    if (Math.random() < user['percent' + shootType]) {

        showText(shootType + '점슛이 성공했습니다!');
        updateUserScore(shootType);
    } else {
        showText(shootType + '점슛이 실패했습니다.');
    }


    game.isComputerTurn = true;

    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = false;
    }

    var userButtons = document.getElementsByClassName('btn-user');

    for (var i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = true;
    }


    game.shotLeft--;



    //var shotLeftElem = document.getElementById('shots-left');
    var $shotLeftElem = $('#shots-left');
    //shotLeftElem.innerHTML = game.shotLeft;
    $shotLeftElem.html(game.shotLeft);

    if (game.shotLeft === 0) {
        if (user.score > computer.score)
            showText('승리했습니다!');
        else if (user.score < computer.score)
            showText('아쉽게도 졌습니다.');
        else
            showText('비겼습니다.');
        for (var i = 0; i < computerButtons.length; i++) {
            computerButtons[i].disabled = true;
        }

        for (var i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled = true;
        }

    }


}


// 컴퓨터 함수 추가
function updateAI() {
    var diff = user.score - computer.score; // 사용자의 점수에서 컴퓨터의 점수를 뺀 값 ==> 0보다 크면 현재 사용자가 이기고 있는 상황, 0보다 작으면 반대로 컴퓨터가 리드
    if (diff >= 10) {
        computer.percent2 = 0.7;
        computer.percent3 = 0.43;
    } else if (diff >= 6) {
        computer.percent2 = 0.6;
        computer.percent3 = 0.38;
    } else if (diff <= -10) {
        computer.percent2 = 0.3;
        computer.percent3 = 0.23;
    } else if (diff <= -6) {
        computer.percent2 = 0.4;
        computer.percent3 = 0.28;
    }
}

$(function () {
    showText(3);

    setTimeout(function () {
        showText(2);
        setTimeout(function () {
            showText(1);
            setTimeout(function () {
                showText('컴퓨터부터 시작합니다.');
                disableComputerButtons(false);
            }, 1000);
        }, 1000);
    }, 1000);
});

// 안내 문구 표시
function showText(s) {
    var $textElem = $('#text');
    $textElem.fadeOut(300, function () {
        $textElem.html(s);
        $textElem.fadeIn(100);
    })
}



function updateComputerScore(score) {
    computer.score += score;
    //var comScoreElem = document.getElementById('computer-score');
    var $comScoreElem = $('#computer-score');
    //comScoreElem.innerHTML = computer.score;
    //$comScoreElem.html(computer.score);
    $comScoreElem.animateNumber({
        number: computer.score
    });
}

function updateUserScore(score) {
    user.score += score;
    //var userScoreElem = document.getElementById('user-score');
    var $userScoreElem = $('#user-score');
    //userScoreElem.innerHTML = user.score;
    //$userScoreElem.html(user.score);
    $userScoreElem.animateNumber({
        number: user.score
    });
}


function disableComputerButtons(flag) {
    /*
    var computerButtons = document.getElementsByClassName('btn-computer');

    for (var i = 0; i < computerButtons.length; i++) {
        computerButtons[i].disabled = flag;
    }
    */

    $('.btn-computer').prop('disabled', flag);
}

function disableUserButtons(flag) {
    /*
    var userButtons = document.getElementsByClassName('btn-user');

    for (var i = 0; i < userButtons.length; i++) {
        userButtons[i].disabled = flag;
    }
    */

    $('.btn-user').prop('disabled', flag);
}