import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
      <div className="main-header">
        <img className="image" src="./Rectangle 5.png" alt="Main Image" />

        <div className="main-header_logo">로고</div>
        <div className="main-header_search">
          <div className="search-box">
            <input type="text" className="search-input"/>
            <div className="search-line"></div>
            <button className="search-button" style={{color:"gray"}}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className="main-header_user">
          <div className="user">
            <button span className="user1">로그인</button>
            <button span className="user2">회원가입</button>
            <button span className="user3">관심상품</button>
          </div>
        </div>

        <button className="icon-container-right">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <button className="icon-container-left">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
  )
};

const MainBody = () => {
  return(
    <div className="main-body">
        
        
        <div className="manufacturer">
          <button className="Samsung"><img src="./Samsung.png" alt="Samsung"/></button>
          <button className="Lg"><img src="./Lg.png" alt="Lg"/></button>
          <button className="Apple"><img src="./Apple.png" alt="Apple"/></button>
          <button className="Renova"><img src="./Renova.png" alt="Renova"/></button>
          <button className="Asus"><img src="./Asus.png" alt="Asus"/></button>
        </div>
          
        <div className="main-body-notebook">
          <div className="main-body-row">
            <button className="notebook-button">
              내게 맞는 노트북
            <div className="notebook-description">
              나의 용도에 맞는 노트북을 빠르게 확인하세요
            </div>
            <div className="notebook-view-all">
            전체상품보기
            </div>
            </button>

            <button className="student-notebook">
              학생﹒사무용 노트북
            <div className="student-notebook-need">
              간단한 문서 작업이 필요합니다
            </div>
            </button>

            <button className="design-notebook">
              디자인 노트북
            <div className="design-notebook-need">
              그래픽 작업이 필요합니다
            </div>
            </button>

            <button className="video-notebook">
              3D,영상 노트북
            <div className="video-notebook-need">
              렌더링 작업이 필요합니다
            </div>
            </button>
          </div>

          <div className="main-body-row">
            <button className="gaming-notebook">
              게이밍 노트북
            <div className="gaming-notebook-need">
              고성능 게임을 실행합니다
            </div>
            </button>

          <button className="develop-notebook">
            개발자 노트북
          <div className="develop-notebook-need">
            코딩 작업이 필요합니다
          </div>
          </button>
          </div>
        </div>      
      </div>
  )
}


const MainRecommend = () => {
  // 가짜 상품 데이터 (실제 데이터를 가져와야 함)
  const fakeRecommendations = [
    {
      id: 1,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 2,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 3,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 4,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 5,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 6,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 7,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 8,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    {
      id: 9,
      name: "ASUS ROG STRIX G18 G814JV-N500",
      Os: "Window 10",
      CPU: "i7-13650HX (2.6GHz)",
      RAM: "DDR5 8GB*2",
      저장장치: "SSD M.2(NVMe)",
      VGA: "GeForce RTX 4060"
    },
    
  ];

  return (
    <div className="main-recommend">
      <strong>추천상품보기</strong>
      <div className="recommendation-list">
        {fakeRecommendations.map((product) => (
          <div key={product.id} className="recommendation-item">
            <div className="product-image" style={{ backgroundColor: "gray" }}></div>
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p>{product.CPU}</p>
              <p>{product.RAM}</p>
              <p>{product.저장장치}</p>
              <p>{product.VGA}</p>
            </div>
            <div className="product-action">
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return(
    <div>
        <footer className="footer">  
        <p>렙스토어 소개 | 이용약관 | <strong>개인정보처리방법</strong> | 청소년보호방침 | 광고센터 | 입점문의 | 고객센터 </p> 
        <p>   z  
      
        </p>
        <p><strong>(주) 랩스토어 </strong></p>
        <p>대표이사:유병진   경기도 용인시 처인구 명지로 116   사업자등록번호:031-05-2023   통신판매신고:2023-용인처인-1999호 </p>
        <p>대표번호:031) 1234 - 5678   팩스:031) 8756 - 4321   문의:abc1234@mju.ac.kr</p>
        <p>   z   </p>
        <p>(주) 랩스토어는 통신판매 정보제공자로서 통신판매의 거래대상자가 아니며, 상품의 주문/배송/환불에 대한 의무와 책임은 각 쇼핑몰(판매자)에게 있습니다</p>
        <p>Copyright ⓒ Lapstore Inc. All rights reserved.</p>
        </footer>
      </div>
  )
}
function App() {
  return (
    <div>
      <Header />
      <MainBody />
      <MainRecommend/>
      <Footer />
      

    </div>
  );
}

export default App;
