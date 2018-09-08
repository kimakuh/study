import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar';


// 리액트돔은 실제 DOM과 상호작용
// 리액트는 컴포넌트를 생성하고 관리

// Create a new component. [새로운 컴포넌트 생성]
// This component should produce some HTML [이 컴포넌트는 HTML을 생성]
// => 컴포넌트를 만든다



const API_KEY = 'AIzaSyB--J28g5wpB-aYwpIQDVPDfGDpLcSYRgk';




class App extends Component {

constructor(props){
    super(props);

    this.state = { videos : []};

    YTSearch({key : API_KEY, term :'surfboards'}, function(data){
        this.setState({videos});
        // this.setState({videos:videos});
    });
}

    render(){    
    return (
    <div>
        <SearchBar />
    </div>
    );
}
}
// ==> 컴포넌트가 JSX를 반환

/* 
const는 ES6나 ES2016에서 나오는 표현

const 역시 다른 변수 선언할 때와 비슷하게 사용 예) var App

유일한 차이점은 const로 선언한 변수는 무조건 최종값을 갖는다

선언 이후 변하지 않음 

그렇기 때문에 변수가(변하는 값) 아니라 상수(변하지 않는 값)

=> 상수는 선언된 이후 재할당 되지 않음

App = 5; ===> 에러

function 은 const로 선언된 app에 해당 함수를 할당


JSX는 컴포넌트를 깔끔하고 보기좋게 만든다 => 사용하고 이해하기가 쉽다

*/



// Take this component's generated HTML [이 컴포넌트가 만든 HTML을 가져가고]
// and put it on the page(in the DOM) [페이지에 반영한다 DOM 안에]
// => 만든 컴포넌트를 페이지에 나오게 한다

ReactDOM.render(<App />, document.querySelector('.container'));
