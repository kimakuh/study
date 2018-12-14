    // 컴퓨터 점수
    var comScore = 0;

    // 사용자 점수
    var userScore = 0;

    // 컴퓨터 차례
    var isComputerTurn = true;

    // 슛횟수
    var shotLeft = 15;









    // 컴퓨터 슛하기 버튼 클릭 이벤트 핸들러
    function onComputerShoot() {

        if (!isComputerTurn)
        return;

        // var textElem = document.getElementById('text');

        // var comScoreElem = document.getElementById('computer-score');
        var shootType = Math.random() < 0.5 ? 2 : 3; // 삼항연산자 참 ==> 2 / 거짓 ==> 3

        if (shootType === 2) {
            if (Math.random() < 0.5) {
                // 2점슛 1/2 확률로 성공 
                showText('컴퓨터가 2점슛을 성공시켰습니다.');
                updateComputerScore(2);
            } else {
                // 실패 시
                showText('컴퓨터가 2점슛을 실패했습니다.');
            }
        } else {
            if (Math.random() < 0.33) {
                //3점슛 1/3 확률로 성공
                showText('컴퓨터가 3점슛을 성공시켰습니다.');
                updateComputerScore(3);
            } else {
                // 실패시
                showText('컴퓨터가 3점슛을 실패했습니다.');
            }
        }

        isComputerTurn = false;

        disableComputerButtons(true);
        disableUserButtons(false);


    }



    function onUserShoot(shootType) {
        
        if (isComputerTurn)
        return;

        // var textElem = document.getElementById('text');
    //  var userScoreElem = document.getElementById('user-score');

        if (shootType === 2) {
            if (Math.random() < 0.5) {

                showText('2점슛이 성공했습니다!');
                updateUserScore(2);
            } else {
                showText('2점슛이 실패했습니다.');
            }
        } else {
            if (Math.random() < 0.33) {
                showText('3점슛이 성공했습니다.');
                updateUserScore(3);
            } else {
                showText('3점슛이 실패했습니다.');
            }
        }

        isComputerTurn = true;

        var computerButtons = document.getElementsByClassName('btn-computer');

        for (var i = 0; i < computerButtons.length; i++) {
            computerButtons[i].disabled = false;
        }

        var userButtons = document.getElementsByClassName('btn-user');

        for (var i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled = true;
        }

        shotLeft--;
        
        var shotLeftElem = document.getElementById('shots-left');
        shotLeftElem.innerHTML = shotLeft;

        if (shotLeft === 0) {
            if (userScore > comScore)
            showText('승리했습니다!');
            else if (userScore < comScore)
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



    // 안내 문구 표시
    function showText(s) {
        var textElem = document.getElementById('text');
        textElem.innerHTML = s;
    }



    function updateComputerScore(score) {
        comScore += score;
        var comScoreElem = document.getElementById('computer-score');
        comScoreElem.innerHTML = comScore;
    }

    function updateUserScore(score) {
        userScore += score;
        var userScoreElem = document.getElementById('user-score');
        userScoreElem.innerHTML = userScore;
    }
    

    function disableComputerButtons(flag) {
        var computerButtons = document.getElementsByClassName('btn-computer');

        for (var i = 0; i < computerButtons.length; i++) {
            computerButtons[i].disabled = flag;
        }
    }

    function disableUserButtons(flag) {
        var userButtons = document.getElementsByClassName('btn-user');

        for (var i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled = flag;
        }
    }