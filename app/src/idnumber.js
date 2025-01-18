import React, { useState } from 'react';
import './idnumber.css';

function Idnumber() {
  const [idNumber, setIdNumber] = useState('');

  const handleNumberClick = (number) => {
    if (idNumber.length < 13) {
      setIdNumber(idNumber + number);
    }
  };

  const handleClearClick = () => {
    setIdNumber('');
  };

  const handleDeleteClick = () => {
    setIdNumber(idNumber.slice(0, -1));
  };

  const handleSubmitClick = () => {
    if (idNumber.length === 13) {
      alert(`입력된 주민등록번호: ${idNumber}`);
    } else {
      alert('주민등록번호 13자리를 입력해주세요.');
    }
  };

  const displayChars = Array(13).fill('-');
  idNumber.split('').forEach((digit, index) => {
    displayChars[index] = '*';
  });

  return (
    <div className="container">
      <div className="main-page">
        <img
          src="/main/긴급전화통합.jpeg"
          alt="Emergency Numbers"
          className="top-image"
        />
        <h2 className="idservice-title" style={{ color: '#d94925' }}>
          주민등록번호<span style={{ color: '#2e3d86' }}>를 입력하시고 </span>
          확인<span style={{ color: '#2e3d86' }}>을 누르세요</span>
        </h2>

        {/* ID 입력 화면 */}
        <div className="id-inputblank">
          {displayChars.map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        {/* 키패드 */}
        <div className="idnumber-input-keypad-container">
          <div className="idnumber-input-area">
            <div className="idnumber-input-box">
              <p style={{ color: '#2e3d86' }}>주민등록증 발급화면입니다.</p>
              <p style={{ color: '#d94925' }}>확인 버튼을 눌러주세요.</p>
            </div>
          </div>

          <div className="idnumberkeypad">
            {[ [1, 4, 7], [2, 5, 8], [3, 6, 9] ].map((row, rowIndex) => (
              <div className="idnumberkeypad-column" key={rowIndex}>
                {row.map((number) => (
                  <button
                    key={number}
                    className="idnumberkeypad-button"
                    onClick={() => handleNumberClick(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            ))}

            <div className="idnumberkeypad-column idnumberlast-column">
              <button
                className="idnumberkeypad-button idnumberclear-button"
                onClick={handleClearClick}
              >
                삭제
              </button>
              <button
                className="idnumberkeypad-button"
                onClick={() => handleNumberClick(0)}
              >
                0
              </button>
              <button
                className="idnumberkeypad-button idnumberdelete-button"
                onClick={handleDeleteClick}
              >
                정정
              </button>
            </div>
          </div>
        </div>

        {/* 버튼 컨테이너 */}
        <div className="idnumberbutton-container">
          <button className="idnumberhome-button" onClick={handleSubmitClick}>
            <img
              src="/main/home.png"
              alt="home icon"
              className="idnumberhomebutton-icon"
            />
            처음화면
          </button>

          <button className="idnumberprevious-button" onClick={handleSubmitClick}>
            <img
              src="/main/previous.png"
              alt="previous icon"
              className="idnumberpreviousbutton-icon"
            />
            이전화면
          </button>

          <button className="idnumbersubmit-button" onClick={handleSubmitClick}>
            <img
              src="/main/check-symbol.png"
              alt="submit icon"
              className="idnumberbutton-icon"
            />
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Idnumber;
