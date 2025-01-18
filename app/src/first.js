import React, { useEffect } from 'react';
import './first.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function First() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/blackcircle'); // 4초 뒤에 /blackcircle로 이동
    }, 4000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <div className="main-page">
        <div className="mention">
          <span style={{ color: '#1C1C1C' }}>
            다음페이지에서<br />
            <span style={{ color: '#ED1C24' }}>
              중앙에 있는<br />
              "검은 점"
            </span>
            <br />
            <span style={{ color: '#000C7B' }}>5초 동안</span>
            <br />
            응시해주세요.
          </span>
        </div>
      </div>
    </div>
  );
}

export default First;
