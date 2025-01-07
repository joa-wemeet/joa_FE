import React from 'react';
import './Mainpage.css'; // 스타일 시트 임포트

function MainPage() {
  const handleServiceClick = (service) => {
    console.log(`${service} clicked`); // 실제 기능을 추가할 위치
  };

  return (
    <div className="main-page">
      <img src="/main/긴급전화통합.jpeg" alt="Emergency Numbers" className="top-image"/>
      <h2 className="service-title">발급을 원하시는 증명서를 선택하세요</h2>
      <div className="service-section">
        {/* 각 서비스 박스 */}
        <div className="service-box" onClick={() => handleServiceClick('주민등록')}>
          <span>주민등록</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">무료</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('지적, 토지, 건축')}>
          <span>지적, 토지, 건축</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">다음화면</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('차량')}>
          <span>차량</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">다음화면</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('보건복지')}>
          <span>보건복지</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">무료</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('농지대장')}>
          <span>농지대장</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">다음화면</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('가족관계등록부')}>
          <span>가족관계등록</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">500원</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('제적부')}>
          <span>제적부</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">500원/300원</span>
        </div>
        <div className="service-box" onClick={() => handleServiceClick('병적증명서')}>
          <span>병적증명서</span>
          <div className="service-divider"></div>
          <span className="line">--------------</span>
          <span className="service-free">무료</span>
        </div>
        {/* 추가적인 서비스 박스 구현 */}
      </div>
    </div>
  );
}

export default MainPage;
