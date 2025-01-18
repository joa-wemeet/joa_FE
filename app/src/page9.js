import React, { useEffect } from 'react'; // useEffect 임포트
import './Mainpage.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page9() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 페이지 로드 후 3초 뒤에 리다이렉트
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/page16');
    }, 3000);

    // 컴포넌트가 언마운트될 때 타이머를 클리어
    return () => clearTimeout(timer);
  }, [navigate]);

  const TransparentBox = () => {
    const boxStyle = {
      width: "1000px",
      height: "1500px",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // 반투명 흰색
      color: "rgb(0, 9, 90)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "35px",
      border: "1px solid rgba(255, 255, 255, 0.5)", // 반투명 흰색 테두리
      fontFamily: "Arial, sans-serif",
      fontSize: "2.8em",
      fontWeight: "bold",
      textAlign: "center",
      flexDirection: "column",
    };

    return (
      <div style={boxStyle}>
        <p>민원을 처리 중입니다.</p>
        <img
          src="/main/loading.gif"
          alt="Loading"
          className="loading-image"
        />
      </div>
    );
  };

  return (
    <div className="container">
      <div
        className="main-page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TransparentBox />
      </div>
    </div>
  );
}

export default Page9;
