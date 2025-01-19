import React, { useState } from 'react';
import './page12.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page12() {
  const [page12Number, page12setIdNumber] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const page12handleNumberClick = (page12number) => {
    if (page12Number.length < 13) {
      page12setIdNumber(page12Number + page12number);
    }
  };

  const page12handleClearClick = () => {
    page12setIdNumber('');
  };

  const page12handleDeleteClick = () => {
    page12setIdNumber(page12Number.slice(0, -1));
  };

  const page12handleSubmitClick = () => {
    if (page12Number.length === 13) {
      navigate('/page13'); // 주민등록번호를 다 입력한 경우 /page13로 이동
    } else {
      alert('주민등록번호 13자리를 입력해주세요.');
    }
  };

  const page12displayChars = Array(13).fill('-');
  page12Number.split('').forEach((digit, index) => {
    page12displayChars[index] = '*';
  });

  return (
    <div className="container">
      <div className="main-page">
        <h2 className="page12service-title" style={{ color: '#d94925' }}>
          주민등록번호<span style={{ color: '#2e3d86' }}>를 입력하시고 </span>
          확인<span style={{ color: '#2e3d86' }}>을 누르세요</span>
        </h2>

        {/* 키패드 */}
        <div className="page12number-input-keypad-container">
          <div className="page12number-input-area">
            <div className="page12number-input-box">
              <p style={{ color: '#2e3d86' }}>주민등록증 발급화면입니다.</p>
              <p style={{ color: '#d94925' }}>확인 버튼을 눌러주세요.</p>
            </div>
          </div>

          {/* ID 입력 화면 */}
          <div className="page12-inputblank">
            {page12displayChars.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>

          <div className="page12numberkeypad">
            {[ [1, 4, 7], [2, 5, 8], [3, 6, 9] ].map((row, rowIndex) => (
              <div className="page12numberkeypad-column" key={rowIndex}>
                {row.map((number) => (
                  <button
                    key={number}
                    className="page12numberkeypad-button"
                    onClick={() => page12handleNumberClick(number)}
                  >
                    {number}
                  </button>
                ))}
              </div>
            ))}

            <div className="page12numberkeypad-column page12numberlast-column">
              <button
                className="page12numberkeypad-button page12numberclear-button"
                onClick={page12handleClearClick}
              >
                삭제
              </button>
              <button
                className="page12numberkeypad-button"
                onClick={() => page12handleNumberClick(0)}
              >
                0
              </button>
              <button
                className="page12numberkeypad-button page12numberdelete-button"
                onClick={page12handleDeleteClick}
              >
                정정
              </button>
            </div>
          </div>
        </div>

        {/* 버튼 컨테이너 */}
        <div className="page12numberbutton-container">
          <button
            className="page12numberhome-button"
            onClick={() => navigate('/')} // '처음화면' 클릭 시 '/'로 이동
          >
            <img
              src="/main/home.png"
              alt="home icon"
              className="page12numberhomebutton-icon"
            />
            처음화면
          </button>

          <button
            className="page12numberprevious-button"
            onClick={() => navigate('/page11')} // '이전화면' 클릭 시 '/page11'로 이동
          >
            <img
              src="/main/previous.png"
              alt="previous icon"
              className="page12numberpreviousbutton-icon"
            />
            이전화면
          </button>

          <button
            className="page12numbersubmit-button"
            onClick={page12handleSubmitClick} // '확인' 클릭 시 이동
          >
            <img
              src="/main/check-symbol.png"
              alt="submit icon"
              className="page12numberbutton-icon"
            />
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page12;
