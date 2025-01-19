import React, { useState } from 'react';
import './page13.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page13() {
  const [page13Number, page13setIdNumber] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const page13handleNumberClick = (page13number) => {
    page13setIdNumber((prev) => prev + page13number); // Append the clicked number
  };

  const page13handleClearClick = () => {
    page13setIdNumber(''); // Clear the idNumber
  };

  const page13handleSubmitClick = () => {
    if (page13Number) {
      navigate('/page14'); // 발급부수 입력 후 '확인' 클릭 시 /page14로 이동
    } else {
      alert('발급부수를 입력하세요.');
    }
  };

  return (
    <div className="container">
      <div className="main-page">
        <h2 className="page13service-title" style={{ color: '#2e3d86' }}>
          발급할 <span style={{ color: '#d94925' }}>부수</span>를 입력한 후
          <span style={{ color: '#d94925' }}> 확인</span>을 누르세요
        </h2>
        <div className="page13container2">
          <div className="page13input-area">
            <div className="page13-input-box">
              <p>
                <span style={{ color: '#d94925' }}>신청증명서</span>
                <span style={{ color: '#2e3d86' }}> : 주민등록표(초본)</span>
              </p>
              <p>
                <span style={{ color: '#d94925' }}>수수료</span>
                <span style={{ color: '#2e3d86' }}> : 무료</span>
              </p>
              <p>
                <span style={{ color: '#d94925' }}>현재신청항목</span>
                <span style={{ color: '#2e3d86' }}> : 주민등록표(초본)</span>
              </p>
            </div>
          </div>

          <div className="page13input-keypad-container">
            {/* Display Box for Numbers */}
            <div className="page13number-display">
              <h2>발급부수 : {page13Number || '--'}</h2>
            </div>

            {/* Keypad */}
            <div className="page13keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  className="page13keypad-button"
                  onClick={() => page13handleNumberClick(number)}
                >
                  {number}
                </button>
              ))}
              <button className="page13keypad-button2" onClick={page13handleClearClick}>
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="page13button-container">
          <button
            className="page13home-button"
            onClick={() => navigate('/')} // '처음화면' 클릭 시 '/'로 이동
          >
            <img src="/main/home.png" alt="home icon" className="page13homebutton-icon" />
            처음화면
          </button>

          <button
            className="page13previous-button"
            onClick={() => navigate('/page12')} // '이전화면' 클릭 시 '/page12'로 이동
          >
            <img src="/main/previous.png" alt="previous icon" className="page13previousbutton-icon" />
            이전화면
          </button>

          <button
            className="page13submit-button"
            onClick={page13handleSubmitClick} // '확인' 클릭 시 동작
          >
            <img src="/main/check-symbol.png" alt="submit icon" className="page13button-icon" />
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page13;
