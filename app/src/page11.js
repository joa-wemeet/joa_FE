import React from 'react';
import './page11.css'; // 스타일 시트 임포트
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page11() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleServiceClick = (service) => {
    if (service === '주민등록표(초본)') {
      navigate('/page12'); // '주민등록표(초본)' 클릭 시 /page12로 이동
    } else {
      console.log(`${service} clicked`);
    }
  };

  return (
    <div className="container">
      <div className="main-page">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            justifyContent: 'center',
            padding: '50px',
          }}
        >
          {[{ label: '주민등록표(초본)', free: true }, { label: '주민등록표(등본)', free: true }].map((button, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(button.label)} // 클릭 이벤트 추가
              style={{
                width: '900px',
                height: '500px',
                padding: '10px 20px',
                border: '1px solid #ccc',
                borderRadius: '15px',
                backgroundColor: '#2e3d86',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '6em',
                color: '#FFFFFF',
                marginTop: '170px',
                marginBottom: '80px', // 버튼 사이에 여백 추가
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
        <button className="previousbutton">
          <img src="/main/previous.png" alt="previous icon" className="previousbutton-icon" />
          이전화면
        </button>
      </div>
    </div>
  );
}

export default Page11;
