import React, { Component } from 'react';
// == const Component = React.Component;


// const SearchBar = () => {
//     return <input />;
// };




class SearchBar extends Component { 
// SearchBar라고 불리는 클래스를 생성하고,
// React.Component로부터 모든 기능을 제공 받아라
// => 이 검색바는 React.Component 클래스에게 받은 기능을 제공
 render() { // 클래스에 메소드를 할당하는 구문
    return <input onChange={event => console.log(event.target.value)} />;
 }

}



export default SearchBar;
