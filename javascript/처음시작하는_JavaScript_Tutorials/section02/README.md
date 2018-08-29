# 처음시작하는 JavaScript Tutorials

## section02
JavaScript 기본 문법


## 09 - JavaScript 함수

### 함수
- 개발자가 필요할 때 동작시킬 수 있도록 만들어 놓는 코드블럭
- 브러우저는 함수의 존재만 파악하고 있다가 개발자가 원할 때 함수 내부에 작성해 놓은 코드를 실행

<pre>
	<script>
		function f1(){
			document.write("f1함수 호출");
		}
		// 실행하면 아무것도 출력되지 않음
		// 함수를 호출해야 내부에 있는 코드가 출력
		
		f1();
	</script>
</pre>


### 함수의 이름은 함수의 주소값
- 자바스크립트는 함수의 이름이 함수가 존재하는 메모리의 주소 값을 담은 변수로 취급
- 자바스크립트에서는 함수의 주소 값을 다른 변수에 담는 것이 가능


<pre>
	<script>
		function f1(){
			document.write("f1함수 호출<br/>");
		}
		// 실행하면 아무것도 출력되지 않음
		// 함수를 호출해야 내부에 있는 코드가 출력
		
		f1();
		
		
		var f2 = f1;
		
		f2();
	</script>
</pre>



### 익명함수
- 이름이 없는 함수를 익명함수라고 함 => 함수를 만들때 이름을 정하지 않음
- 이름이 없는 함수이므로 호출을 위해 변수에 담아야 함
- 매게 변수로 함수를 넘길 때 주로 사용



<pre>
	<script>
		function f1(){
			document.write("f1함수 호출<br/>");
		}
		// 실행하면 아무것도 출력되지 않음
		// 함수를 호출해야 내부에 있는 코드가 출력
		
		f1();
		
		
		var f2 = f1;
		
		f2();
		
		var f3 = function(){
			document.write("익명함수 호출<br/>");
		}
		
		
		f3();
	</script>
</pre>


### 매개 변수
- 함수를 호출할 때 값을 넘겨줄 수 있으며 이 값은 매개 변수로 받을 수 있음
- 함수 호출 시 넘겨주는 값의 개수와 정의된 매개 변수의 개수와는 무관

<pre>
	<script>
		function f10(a,b){
			document.write("f10함수 호출<br/>");
			document.write("a : " + a + "<br/>");
			document.write("b : " + b + "<br/>");
			document.write("<hr/>");
		}
		
		
		f10();
		// 두 값 다 undefined
		f10(10);
		// a 에 10이 들어감
		f10(10, 20);
		// a에 10 b에 20 이 들어감
		f10(10, 20, 30, 40, 50)
		// a에 10 b에 20이 들어가고 나머지 값은 유실
	</script>
</pre>




### arguments 배열
- 함수를 호출할 때 넘겨주는 값은 모두 매개 변수로 받을 수 있음
- 그 외에 자바스크립트의 모든 함수들은 argument라는 배열이 자동으로 만들어지는데 여기에도 호출시 넘겨주는 값들이 있음


<pre>
	<script>
		
		function f20(){
			document.write("f20함수 호출<br/>");
			document.write("배열의 개수 : " + arguments.length + "<br/>");
			for(var idx in arguments){
				document.write(idx + " : " + arguments[idx] + "<br/>");
			}
			document.write("<hr/>");
		}
		
		f20();
		f20(10);
		f20(10, 20);
		f20(10, 20, 30, 40, 50);
		
		
	</script>
</pre>



### 호출 시 함수 넘기기
- 함수를 호출 할 때 함수를 넘길 수 있으며 매개변수로 받아 호출 할 수 있음

<pre>
	<script>
		function f1(f2){
			f2();
		}
		
		function f3(){
			document.write("f3함수 호출<br/>");
		}
	
		
		f1(f3);
		
		f1(function(){
			document.write("익명함수 호출<br/>");
		});
		
		
	</script>
</pre>



### 학습정리
- 개발자가 필요할 때 동작시킬 수 있도록 만드는 코드블럭 => 함수
- 함수의 이름은 함수가 존재하는 메모리상의 주소값 => 다른 변수에 담거나 매개 변수로 넘길 수 있음
- 함수를 호출할 때 넘겨주는 값은 매개 변수로 받거나 arguments 배열로 받을 수 있음



## 08 - JavaScript 배열

### 배열
- 여러 기억공간을 하나의 이름으로 관리할 때 사용
- JavaScript는  [] 로 배열을 표현

<pre>
	<script>
		var array = [10, 20, 30, 40, 50];
		
		document.write("array : " + array + "<br/>");
	</script>
</pre>


### 배열의 개수
- 배열이 관리하는 기억장소의 개수는 length 라는 것을 이용해 파악

<pre>
	<script>
		var array = [10, 20, 30, 40, 50];
		
		document.write("array : " + array + "<br/>");
		document.write("array의 개수 : " + array.length + "<br/>");
	</script>
</pre>


### 배열 요소 접근
- 배열이름[인덱스] 형태로 작성하면 배열 요소에 접근 가능
- 인덱스는  0 부터 시작

<pre>
	<script>
		var array = [10, 20, 30, 40, 50];
		
		document.write("array[0] : " + array[0] + "<br/>");
		document.write("array[1] : " + array[1] + "<br/>");
		
		array[2] = 300;
		array[3] = 400;
		
		document.write("array[2] : " + array[2] + "<br/>");
		document.write("array[3] : " + array[3] + "<br/>");
	</script>
</pre>

### for in
- 배열이 관리하는 기억 장소를 처름부터 끝까지 순회할 경우 for문을 사용
- for in은 배열 순회를 목적으로 for문을 사용할 때 보다 편하게 사용할 수 있도록 지원하는 개념


<pre>
	<script>
		var array = [10, 20, 30, 40, 50];
		
		for(var i = 0; i < array.length; i++){
			document.write(array[i] + "<br/>");
		}
		
		for (var idx in array){
			document.write(array[idx] +  "<br/>");
		}
		
		
	</script>
</pre>



### 학습정리
- 여러개의 기억장소를 하나의 이름으로 관리할 때 배열을 사용
- 배열은 [] 로 표현
- 배열이 관리하는 기억장소의 접근은 0 부터 시작하는 인덱스 번호를 사용
- for in 구문을 사용하면 보다 편리하고 배열을 순회 할 수 있음



## 07 - JavaScript 반복문

### for 문
- 주어진 조건에 만족할 경우 코드를 반복하는 반복문
- 주로 반복 획수가 결정되어 있을 때 사용

<pre>
	<script>
		for(var i = 0; i < 10; i++){
			document.write("for 문 수행 :" + i + "<br/>");
		}
	</script>
</pre>


### while 문
- 주어진 조건에 만족할 경우 코드를 반복하는 반복문
- 반복할 조건이 결정되어 있을 때 사용
- 조건이 처음부터 거짓이면 단 한번도 수행되지 않음

<pre>
	<script>
		var a1 = 0;
		
		// a1 = 10;  이라면 whlile 문은 수행되지 않음
		
		while(a1 < 10){
			a1++;
			document.write("while문 수행 : " + a1 + "<br/>");
		}
	</script>
</pre>



### do while 문
- 주어진 조건에 만족할 경우 코드를 반복하는 반복문
- 반복할 조건이 결정되어 있을 때 사용
- 조건이 처음부터 거짓이면 한번 수행 된다. ==> do 보다 while이 아래에 있기 때문

<pre>
	<script>
		var a1 = 0;
		
		// var a1 = 20; 라면 
		// do while 문이 한번만 실행되고 종료
		// 코드가 실행되고 조건검사를 하기 때문
		
		do{
			a1++;
			document.write("do while문 수행 : " + a1 + "<br/>");
		} while (a1 < 10);
		
	</script>
</pre>




### 학습정리
- for문은 반복 횟수가 결정되어 있을 때 사용
- while문은 반복 조건이 결정되어 있을 때 사용 => 조건이 처음부터 거짓이면 단 한번도 수행 되지 않음
- do while문은 반복 조건이 경정되어 있을 때 사용 => 조건이 처음부터 거짓이라도 단 한번은 수행됨





## 06 - JavaScript 분기문




### 제어문
- 코드는 위에서 아래로 실행되는데 이러한 흐름을 변경할 때 사용하는 것을 제어문이라고 함
- 제어문은 두 가지로 구분
- 분기문 : if , switch
- 반복문 : for, while , do while




### if 문
- if 문은 분기 문 중에 가장 많이 사용
- 주어진 조건에 만족하면 실행되고 만족하지 않으면 실행되지 않음

<pre>
	<script>
		var a1 = 10;
		
		if(a1 > 10 ){
			document.write("a1는 10보다 큽니다. <br/>");
		}
		
		if(a1 < 20){
			document.write("a1은 20보다 작습니다.");
		}
		// 조건식이 거짓일 때는 실행되지 않고
		// 조건식이 참 일때 실행된다.
		
	</script>
</pre>





### else 문
- if 문의 조건이 만족하지 않을 경우 실행될 부분

<pre>
	<script>
		var a1 = 10;

		if (a1 > 20){
			document.write("a1은 20 보다 큽니다. <br/>");
		} else{
			document.write("a1은 20보다 크지 않습니다. <br/>");
		}
	</script>
</pre>



### else if 문
- 다중 조건을 가졌을 때 사용 => 조건 중 참에 해당하는 부분만 실행 (위에서 부터 조건 검사)
- 만약 모든 조건에 만족하지 않을 경우도 필요하다면 마지막에 else 문을 넣는다.

<pre>
	<script>
		var a1 = 10;

		if(a1 > 20){
			document.write("a1는 20보다 큽니다.<br/>");
		} else if(a1 > 10){
			document.write("a1은 10보다 큽니다.<br/>");
		} else if(a1 > 0){
			document.write("a1은 0보다 큽니다.<br/>");
		} else{
			document.write("a1은 20, 10, 0이 아닙니다.<br/>");
		}
	</script>
</pre>




### switch 문
- 변수나 수식에 해당하는 값 부분으로 이동하여 코드가 실행되는 분기문
- 모든 조건을 검사하면서 내려오는 if 문과 달리 바로 이동하여 실행 => if문 보다 빠름

<pre>
	<script>
		var a1 = 10;
		
		if(a1 == 20){
			document.write("a1은 20입니다.<br/>");
		} else if (a1 == 10){
			document.write("a1은 10입니다.<br/>");
		} else if ( a1 == 0){
			document.write("a1은 0 입니다.<br/>");
		} else {
			document.write("a1은 20, 10, 0이 아닙니다.");
		}
		
		
		switch(a1){
		case 20 :
			document.write("a1은 20입니다.<br/>");
		case 10 :
			document.write("a1은 10입니다.<br/>");
		case 0 :
			document.write("a1은 0 입니다.<br/>");
		default :
			document.write("a1은 20, 10, 0이 아닙니다.<br/>")	
		}
		
		
		switch(a1){
		case 20 :
			document.write("a1은 20입니다.<br/>");
			break;
		case 10 :
			document.write("a1은 10입니다.<br/>");
			break;
		case 0 :
			document.write("a1은 0 입니다.<br/>");
			break;
		default :
			document.write("a1은 20, 10, 0이 아닙니다.<br/>")	
		}
			
	</script>
</pre>





### 학습정리
- if 문은 조건이 만족할 경우 실행되는 분기문
- switch 문은 조건에 해당하는 부분으로 이동되어 실행되는 분기문








## 05 - JavaScript 연산자


### 비트연산자
- 정수나 실수 값을 이진수로 변환한 다음에 그 이진수에 대해서 어떠한 작업을 할때 사용됨


### 타입연산자
<pre>
	<script>
		var a1 = 100;
		var a2 = "100";
		var a3 = false;
		var a4 = 100.01;
		
		var b1 = typeof a1;
		var b2 = typeof a2;
		var b3 = typeof a3;
		var b4 = typeof a4;
		document.write("b1 : " + b1 + "<br/>");
		document.write("b2 : " + b2 + "<br/>");
		document.write("b3 : " + b3 + "<br/>");
		document.write("b4 : " + b4 + "<br/>");

	</script>
</pre>



### 논리연산자

<pre>
	<script>
		var a = 10;
		var b = 20;
		
		var c1 = a > 10 && b > 10; // 거짓 && 참
		// 둘중 하나라도 거짓이면 false
		document.write("c1 : " + c1 + "<br/>");
		
		var c2 = a < 20 && b > 10; // 참 && 참
		document.write("c2 : " + c2 + "<br/>");
		// 양쪽 수식의 결과 값이 둘다 참이어야 true
		
		
		var c3 = a > 10 || b > 10;
		document.write("c3 :" + c3 + "<br/>");
		// 둘중 하나라도 참이면 true
		var c4 = a > 10 || b < 10;
		document.write("c4 : " + c4 + "<br/>")
		// 양쪽 수식의 결과 값이 둘다 거짓이면 false
		
		
		var c5 = !(a > 10);
		document.write("c5 : " + c5 + "<br/>");
		
	</script>
</pre>



### 비교연산자

<pre>
	<script>
		var a = 10;
		var b = 5;
		
		document.write(a == b);
		document.write("<br/>");
			
		var c = '10';
		document.write(a == c);
		document.write("<br/>");
		
		
		document.write(a === c);
		document.write("<br/>");
		
		
		var d = 100;
		var e = 200;
		
		var f = d < e ? 100 : 200;
		// 조건식이 참이면 100이 f에 들어가고
		// 조건식이 거짓이면 200이 f에 들어간다.
		
		document.write("f : " + f + "<br/>");
		
		
	</script>
</pre>




### 대입연산자

<pre>
	<script>
		var a = 10;
		document.write("a :" + a + "<br/>");
		
		var b = a;
		document.write("b :" + b + "<br/>");
		
		a = 10;
		b = 3;
		
		a += b;
		document.write("a : "+ a +"<br/>");
		
		
		a = 10;
		b = 3;
		
		a -= b;
		document.write("a : " + a + "<br/>");
		

	</script>
</pre>






### 산술연산자
- + 더하기
- - 빼기
- * 곱하기
- / 나누기
- % 나머지
- ++ 증가
- -- 감소


<pre>
	<script>
		var a = 10;
		var b = 3;
		
		var c = a + b;
		document.write("c :" + c + "<br/>");
		
		
		var c2 = a - b;
		var c3 = a * b;
		var c4 = a / b;
		var c5 = a % b;
		
		document.write("c2 : " + c2 + "<br/>");
		document.write("c3 : " + c3 + "<br/>");
		document.write("c4 : " + c4 + "<br/>");
		document.write("c5 : " + c5 + "<br/>");
		
		
		a++;
		// a = a + 1;
		document.write("a :" + a + "<br/>");
		
		a--;
		// a = a - 1;
		document.write("a : " + a + "<br/>");
		
	</script>
</pre>


## 04 - JavaScript 변수와 자료형


### 자료형
- JavaScript는 다음과 같은 자료형을 제공
- 정수 : 100
- 실수 : 10.1
- 문자열 : "문자열", '문자열'
- 참 거짓 : ture, false 

<pre>
	<script>
		document.write("정수 : "+ 100+"<br/>");
		document.write("실수 : "+ 11.11 +"<br/>");
		document.write("문자열 :" + "안녕하세요" +"<br/>");
		document.write("문자열 :" + '안녕하세요' + "<br/>");
		document.write("참 : "+true + "<br/>");
		document.write("거짓 :" +false+"<br />");
		
		
		document.write("이름은 '홍길동입니다.<br/>");
		document.write('이름은 "홍길동"입니다.<br/>');
	</script>
</pre>



### 변수
- 변수는 데이터를 담는 기억장소
- 자바스크립트는 변수 선언시 자료형을 명시하지 않음 => var라는 키워드를 사용
- 변수에 담는 값의 자료형에 따라 값을 관리하는 방법을 자동으로 선택


<pre>
	<script>
		var a1 = 100;
		var a2 = 11.11;
		var a3 = "안녕하세요";
		var a4 = true;
		
		document.write("a1 : " + a1 + "<br/>");
		document.write("a2 : " + a2 + "<br/>");
		document.write("a3 : " + a3 + "<br/>");
		document.write("a4 : " + a4 + "<br/>");
	</script>
</pre>




### undefined
- 변수를 선언하고 값을 대입하지 않으면 undefined 값이 자동으로 대입

<pre>
	<script>
	 	var a1;
	 	document.write("a1 : "+ a1 + "<br/>");
	 	
	 	var a2 = undefined;
	 	document.write("a2 : " + a2 + "<br/>");
	</script>
</pre>

### 학습정리
- JavaScript는 정수, 실수, 문자열, 참 거짓 등의 자료형을 제공
- 변수를 선언할 때 자료형을 명시하지 않고 var 키워드를 사용
- 변수를 선언하고 값을 대입하지 않으면 undefined 값이 대입









## 03 - JavaScript 기초문법

### 세미콜론
- JavaScript는 문장의 마지막에 세미콜론(;)을 찍어 라인이 끝났다는걸 명시
- 하지만 세미콜론은 필수는 아님
- 여러 라인의 코드를 한 번에 작성할 경우에는 세미 콜론을 반드시 붙인다.

<pre>
    <script>
        document.write("세미콜론<br/>");
        document.write("세미콜론<br/>")
        document.write("세미콜론<br/>");document.write("세미콜론<br/>")
    </script>
</pre>





### 대소문자
- JavaScript는 대소문자를 엄격하게 구분
- 소문자로 만들어진 요소를 대문자로 작성하면 오류가 발생

<pre>
    <script>
    document.write("문자열<br/>");
    DOCUMENT.WRITE("문자열<br/>");
    </script>
</pre>



### 주석
- JavaScript는 두 가지 주석을 제공
- // : 한 줄 주석
- /* */ : 여러 줄 주석

<pre>
<script>
// 이 부분은 한줄 주석입니다.

/*
이 부분은 
여러줄 
주석입니다.
*/
</script>
</pre>



### 학습정리
- JavaScript의 세미콜론은 선택사항
- JavaScript는 대소문자를 엄격히 구분
- JavaScript는 한줄 주석과 여러 줄 주석을 제공





## 02 - JavaScript 출력문


### innerHTML
- div와 같이 내부에 HTML 코드를 넣을 수 있는 태그에 HTML 코드를 삽입하는 방식
<pre>
<div id="test"></div>
	<script>
		document.getElementById("test").innerHTML ="HTML 코드 삽입";
	</script>
</pre>


### document.write() 함수
- 지정한 문자열을 HTML 코드로 출력하는 함수

<pre>
<script>
    document.write("HTML 코드 출력");
</script>
</pre>


### alert() 함수
- 웹 브라우저에 경고창을 띄우는 함수
<pre>
<script>
    alert("메시지를 출력하였습니다.");
</script>
</pre>

### console.log() 함수
- 웹 브라우저에서 제공하는 콘솔에 출력하는 함수
<pre>
    <script>
        console.log("콘솔에 출력");
    </script>
</pre>


### 학습정리
- 출력문 학습




## 01 - JavaScript 작성 위치

### inline 방식
- HTML 태그 내에 JavaScript 코드를 작성
- 보통 태그에 대한 이벤트를 처리하기 위해 사용
<pre><button onclick="alert('버튼클릭')">버튼</button></pre>

### internal 방식
- HTML 문서 내부에 JavaScript 코드를 작성하며 script 태그 사이에 작성
- 함수를 정의하여 사용하거나 페이지가 나타날 때 자동으로 실행되는 코드가 필요할 때 사용
- 코드는 위에서 아래 방향으로 동작한다.


### external 방식
- JavaScript 파일을 js 파일에 작성하고 이를 HTML 문서에 삽입하는 방식
- 여러 파일에서 공통적으로 사용하는 코드가 있을 때 사용

### 학습정리

- inline 방식
- internal 방식
- external 방식