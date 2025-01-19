import React from 'react';
import './main/app.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function App() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const eyeTrackingModeClick = () => {
    navigate('/mainpage'); // /mainpage로 이동
  };

  const touchModeClick = () => {
    navigate('/page10'); // /page10으로 이동
  };

  return (
    <div className="container">
      {/* 시선 추적 */}
      <div className="card" onClick={eyeTrackingModeClick} style={{ cursor: 'pointer' }}>
        <h2 className="title">시선 추적</h2>
        <div className="icon">
          <img src="/main/eye.png" alt="Sample" />
        </div>
        <p className="description">
          시선추적을 사용하시려면 <span className="link">여기</span>를 보고 깜빡여 주세요
        </p>
      </div>

      {/* 터치 모드 */}
      <div className="card" onClick={touchModeClick} style={{ cursor: 'pointer' }}>
        <h2 className="title">터치 모드</h2>
        <div className="icon">
          <img src="/main/tap.png" alt="Sample" />
        </div>
        <p className="description">
          터치모드를 이용하시려면 <span className="link">여기</span>를 클릭해 주세요
        </p>
      </div>
    </div>
  );
}

export default App;
