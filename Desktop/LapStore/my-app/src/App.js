import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <div className="main-header">
        <img className="image" src="./Rectangle 5.png" alt="Main Image" />

        <div className="main-header_logo">
          로고
        </div>
        <div className="main-header_search">
            <input type="text" className="text"placeholder="검색어를 입력하세요" />
            <button className="search"><FontAwesomeIcon icon={faSearch}/></button>
        </div>

        <div className="main-header_user">
          <div className ="user">
            <span>로그인</span>
            <span>회원가입</span>
            <span>관심상품</span>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default App;





