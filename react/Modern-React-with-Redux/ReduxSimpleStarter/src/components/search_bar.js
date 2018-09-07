import React, { Component } from 'react';
// == const Component = React.Component;


// const SearchBar = () => {
//     return <input />;
// };




class SearchBar extends Component { 
// SearchBar라고 불리는 클래스를 생성하고,
// React.Component로부터 모든 기능을 제공 받아라
// => 이 검색바는 React.Component 클래스에게 받은 기능을 제공
 
 constructor(props) {
     super(props);

     this.state = { term : 'Starting Value' }
 }

 // 스테이트를 정의하거나 재초기화하는 방법
 // 클래스기반 컴포넌트만 스테이트를 가질 수 있음

render() { // 클래스에 메소드를 할당하는 구문
    return (
        <div>
            <input 
            value={this.state.term}
            onChange={event => this.setState({ term : event.target.value })} />
        </div>
    );
 }

}



export default SearchBar;
