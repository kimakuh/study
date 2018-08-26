# 처음시작하는 JavaScript Tutorials

## section02
JavaScript 기본 문법




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