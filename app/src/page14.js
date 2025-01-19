import React from 'react';
import './Mainpage.css';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page14() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleCashButtonClick = () => {
    navigate('/page'); 
  };

  const handleCardButtonClick = () => {
    navigate('/page9');
  };

  const handleSelectCompleteClick = () => {
    navigate('/page15'); // '선택 완료' 버튼 클릭 시 /page15로 이동
  };

  const TransparentBox = () => {
    const boxStyle = {
      width: "1000px",
      height: "1300px",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // 반투명 배경
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "35px",
      border: "1px rgb(255, 255, 0.5)", // 흰색 테두리
      fontFamily: "Arial, sans-serif",
      fontSize: "18px",
      textAlign: "center",
      flexDirection: "column",
      fontWeight: "bold",
      fontSize: "2.8em",
    };

    const upperContainerStyle = {
      display: "flex", // 가로로 배치
      justifyContent: "center", // 가로로 중앙 정렬
      alignItems: "center", // 세로로 가운데 정렬
      width: "100%", // 부모 컨테이너 너비에 맞추기
      height: "20%", // 상단 박스 높이
    };

    const lowerBoxStyle = {
      backgroundColor: "rgba(1, 1, 1, 0.2)", // 반투명한 배경
      color: "#c4ced7",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      borderRadius: "10px", // 둥근 테두리
      height: "40%", // 하단 박스 높이
      width: "91%", // 부모 컨테이너 너비에 맞추기
      border: "1px solid #fff", // 흰색 테두리
      fontWeight: "bold",
      flexDirection: "column",
      textAlign: "left",
      fontSize: "0.8em",
      marginBottom: "10px",
    };

    const boxInnerStyle = {
      flexDirection: "column",
      justifyContent: "space-between",
      boxSizing: "border-box",
      width: "45%",
      textAlign: "center",
      height: "80%", // 각 컨테이너의 높이
      backgroundColor: "#8fa0cc",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px", // 둥근 테두리
      border: "1px solid #fff", // 흰색 테두리
      margin: "1%",
      cursor: "pointer", // 클릭 가능한 스타일 추가
    };

    return (
      <div style={boxStyle}>
        <div style={upperContainerStyle}>
          <div style={boxInnerStyle}>증명서 추가</div>
          <div
            style={boxInnerStyle}
            onClick={handleSelectCompleteClick} // '선택 완료' 버튼 클릭 시 이동
          >
            선택 완료
          </div>
        </div>
        <div style={lowerBoxStyle}>
          <span style={{ color: "#c8383d", marginLeft: "10px" }}>현재 신청 항목</span>
          <br />
          <span style={{ color: "#314087", marginLeft: "10px" }}> 1) 주민등록등본</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <p
        style={{
          color: '#2e3d86',
          fontSize: '50px',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        증명서를{' '}
        <span style={{ color: '#d94925', fontSize: '50px' }}>추가</span>하여
        일괄 발급할지 선택해주세요.
      </p>
      <div className="page8-main-page">
        <TransparentBox />
      </div>
    </div>
  );
}

export default Page14;
