import React, { useState } from 'react';
import './page6.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page6() {
  const [idNumber, setIdNumber] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleNumberClick = (number) => {
    setIdNumber((prev) => prev + number); // Append the clicked number
  };

  const handleClearClick = () => {
    setIdNumber(''); // Clear the idNumber
  };

  const handleHomeClick = () => {
    navigate('/'); // '처음화면' 클릭 시 /로 이동
  };

  const handlePreviousClick = () => {
    navigate('/idnumber'); // '이전화면' 클릭 시 /idnumber로 이동
  };

  const handleSubmitClick = () => {
    if (idNumber) {
      navigate('/page7'); // 발급부수를 입력하고 '확인' 클릭 시 /page7로 이동
    } else {
      alert('발급부수를 입력하세요.');
    }
  };

  return (
    <div className="container">
      <div className="main-page">
        <img src="/main/긴급전화통합.jpeg" alt="Emergency Numbers" className="top-image" />
        <h2 className="page6service-title" style={{ color: '#2e3d86' }}>
          발급할 <span style={{ color: '#d94925' }}>부수</span>를 입력한 후
          <span style={{ color: '#d94925' }}> 확인</span>을 누르세요
        </h2>
        <div className="container2">
          <div className="page6input-area">
            <div className="page6-input-box">
              <p>
                <span style={{ color: '#d94925' }}>신청증명서</span>
                <br />
                <span style={{ color: '#2e3d86' }}> : 주민등록표(초본)</span>
              </p>
              <p>
                <span style={{ color: '#d94925' }}>수수료</span>
                <br />
                <span style={{ color: '#2e3d86' }}> : 무료</span>
              </p>
              <p>
                <span style={{ color: '#d94925' }}>현재신청항목</span>
                <br />
                <span style={{ color: '#2e3d86' }}> : 주민등록표(초본)</span>
              </p>
            </div>
          </div>

          <div className="page6input-keypad-container">
            {/* Display Box for Numbers */}
            <div className="page6number-display">
              <h2>발급부수 : {idNumber || '--'}</h2>
            </div>

            {/* Keypad */}
            <div className="page6keypad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  className="page6keypad-button"
                  onClick={() => handleNumberClick(number)}
                >
                  {number}
                </button>
              ))}
              <button className="page6keypad-button" onClick={handleClearClick}>
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="page6button-container">
          <button className="page6home-button" onClick={handleHomeClick}>
            <img src="/main/home.png" alt="home icon" className="page6homebutton-icon" />
            처음화면
          </button>

          <button className="page6previous-button" onClick={handlePreviousClick}>
            <img src="/main/previous.png" alt="previous icon" className="page6previousbutton-icon" />
            이전화면
          </button>

          <button className="page6submit-button" onClick={handleSubmitClick}>
            <img src="/main/check-symbol.png" alt="submit icon" className="page6button-icon" />
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page6;
