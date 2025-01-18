import React, { useEffect } from 'react'; // useEffect 임포트
import './Mainpage.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page16() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 페이지 로드 후 5초 뒤에 메인 페이지로 리다이렉트
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/first');
    }, 5000);

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

    const imageStyle = {
      width: "200px", // 이미지 너비를 줄임
      height: "200px", // 이미지 높이를 줄임
      marginTop: "30px", // 텍스트와 이미지 간격 조정
      filter: "hue-rotate(90deg) brightness(1.2)",
    };

    return (
      <div style={boxStyle}>
        민원 요청이 완료되었습니다. <br />
        5초 뒤 메인 페이지로 이동합니다.
        <img src="/main/check.png" alt="check" style={imageStyle}></img>
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

export default Page16;
