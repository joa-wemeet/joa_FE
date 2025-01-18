import React from 'react';
import './Mainpage.css'; // 스타일 시트 임포트
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function MainPage() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleServiceClick = (service) => {
    if (service === '주민등록') {
      navigate('/page4'); // '주민등록' 클릭 시 '/page4'로 리다이렉트
    } else {
      console.log(`${service} clicked`); // 다른 서비스의 클릭 이벤트
    }
  };

  return (
    <div className="container">
      <div className="main-page">
        <img src="/main/긴급전화통합.jpeg" alt="Emergency Numbers" className="top-image" />
        <h2 className="mainservice-title" style={{ color: '#2e3d86' }}>
          발급을 원하시는 <span style={{ color: '#d94925' }}>증명서를 선택</span>하세요
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
          {[
            { label: '주민등록', free: true },
            { label: '지적, 토지, 건축', free: false },
            { label: '차량', free: false },
            { label: '보건복지', free: true },
            { label: '농지대장', free: false },
            { label: '가족관계등록부', price: '500원' },
            { label: '제적부', price: '500원 / 300원' },
            { label: '병적증명서', free: true },
            { label: '지방세', free: false },
            { label: '어선원부', price: '800원' },
            { label: '교육제증명', free: true },
            { label: '국세증명', free: true },
            { label: '건강보험', free: true },
            { label: '고용, 산재보험', free: true },
            { label: '여권', free: true },
            { label: '국민연금', free: true },
          ].map((button, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(button.label)} // 버튼 클릭 시 호출
              style={{
                width: '250px',
                height: '130px',
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '15px',
                backgroundColor: '#2e3d86',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '1.7em',
                color: '#FFFFFF',
              }}
            >
              {button.label}
              <hr
                style={{
                  border: 'none',
                  borderTop: '2px dashed #999',
                }}
              />
              {button.free ? '무료' : button.price || '다음화면'}
            </button>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div
          className="mainservicecontain"
          style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', marginTop: '20px' }}
        >
          <button
            style={{
              backgroundColor: '#568a35',
              border: 'none',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#FFFFFF',
            }}
          >
            설치장소 안내
          </button>
          <button
            style={{
              backgroundColor: '#568a35',
              border: 'none',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              cursor: 'pointer',
              fontSize: '20px',
              color: '#FFFFFF',
            }}
          >
            서비스 시간
          </button>
          <button
            style={{
              backgroundColor: '#fffa5a',
              border: 'none',
              borderRadius: '10%',
              width: '280px',
              height: '120px',
              cursor: 'pointer',
              fontSize: '25px',
              color: '#000000',
            }}
          >
            증명서 검색
          </button>
          <button
            style={{
              backgroundColor: '#fffa5a',
              border: 'none',
              borderRadius: '10%',
              width: '280px',
              height: '120px',
              cursor: 'pointer',
              fontSize: '25px',
              color: '#000000',
            }}
          >
            화면전환<br /> (큰 글씨)
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
