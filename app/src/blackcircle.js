import React, { useEffect } from 'react';
import './blackcircle.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Blackcircle() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // 7초 뒤에 /로 이동
    }, 7000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="main-page">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Blackcircle;
