// 로또 번호 생성기


var list = []; // list라는 빈 배열을 생성
//인덱스의 범위는 0에서 부터  44까지


//결과값 배열


for (var i = 1; i <= 45; i++) {
    list.push(i);
}



var result= [];

for (var i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * list.length);

    // 랜덤으로 선택한 인덱스의 값
    var num = list[index];

    // 배열에서 인덱스의 값 제거
    list.splice(index, 1); // 인덱스 위치기준 1개만큼의 요소를 제거(즉, 인덱스 위치에 있는 요소만 제거)

    result.push(num);
}


for (var i = 0; i < 6; i++){
    document.write('<sapn class="ball">' + result[i] + '</sapn>');
}


console.log('결과', result);