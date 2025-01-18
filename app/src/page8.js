import React from 'react';
import './Mainpage.css'
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트

function Page8() {
  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleCashButtonClick = () => {
    navigate('/page9'); 
  };

  const handleCardButtonClick = () => {
    navigate('/page9');
  };
  

  const TransparentBox = () => {
    const boxStyle = {
      width: "800px",
      height: "500px",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // 반투명 검정색
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
        display: "flex",  // 가로로 배치
        justifyContent: "center", // 가로로 2개 나누기
        alignItems: "center",  // 세로로 가운데 정렬
        width: "100%",  // 부모 컨테이너 너비에 맞추기
        height: "50%",  // 상단 박스의 높이 50%
      };

      const lowerBoxStyle = {
        backgroundColor: "rgba(186, 186, 186, 0.3)", // 반투명한 배경
        color: "#d94925",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",  // 둥근 테두리
        height: "50%",  // 하단 박스 높이 50%
        width: "91%",  // 부모 컨테이너 너비에 맞추기
        border: "1px solid #fff",  // 흰색 테두리
        fontWeight: "bold",
        fontSize: "0.8em",
        marginTop: "20px", // 상단 여백
      };

      const cardStyle = {
        display: "flex", // Flexbox 사용
        flexDirection: "row", // 가로 정렬
        alignItems: "center", // 세로 중앙 정렬
        justifyContent: "center", // 가로 중앙 정렬
        boxSizing: "border-box",
        width: "45%",
        height: "80%",
        textAlign: "center",
        backgroundColor: "#b4d69a",
        color: "black",
        borderRadius: "15px",
        border: "1px solid #fff",
        margin: "1%",
      };
      
      const cashStyle = {
        display: "flex", // Flexbox 사용
        flexDirection: "row", // 가로 정렬
        alignItems: "center", // 세로 중앙 정렬
        justifyContent: "center", // 가로 중앙 정렬
        boxSizing: "border-box",
        width: "45%",
        height: "80%",
        textAlign: "center",
        backgroundColor: "#f6f577",
        color: "black",
        borderRadius: "15px",
        border: "1px solid #fff",
        margin: "1%",
      };
      
      const imageStyle = {
        width: "80px", // 이미지 크기
        marginRight: "10px", // 텍스트와 이미지 간격
      };
      
      return (
        <div style={boxStyle}>
          <div style={lowerBoxStyle}>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>민원신청 내역</p>
          </div>
          <div style={upperContainerStyle}>
            {/* 카드 버튼 */}
            <div style={{ ...cardStyle, cursor: "pointer" }} onClick={handleCardButtonClick}>
              <img src="main/card.png" alt="카드" style={imageStyle} />
              <div>
                <p style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "0px" }}>카드</p>
                <p style={{ fontSize: "0.5em", marginTop: "2px", marginBottom: "50px" }}>(삼성페이 가능)</p>
              </div>
            </div>
      
            {/* 현금 버튼 */}
            <div style={{ ...cashStyle, cursor: "pointer" }} onClick={handleCashButtonClick}>
              <img src="main/cash.png" alt="현금" style={imageStyle} />
              <div>
                <p style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "0px" }}>현금</p>
                <p style={{ fontSize: "0.5em", marginTop: "2px", marginBottom: "50px" }}>(동전, 천원 지폐)</p>
              </div>
            </div>
          </div>
        </div>
      );           
    }

  return (
    <div className="container">
        <div className="main-page">
            <img src="/main/긴급전화통합.jpeg" 
                alt="Emergency Numbers" 
                className="top-image"/>
            <br /><br /><br /><br />
            <p
                style={{
                color: '#2e3d86',
                fontSize: '20px',
                marginBottom: '20px', // 문구와 박스 간 간격 추가
                textAlign: 'center',
                }}
              >
                <span style={{ color: '#d94925', fontSize: '20px' }}>민원신청내역</span>과
                <span style={{ color: '#d94925', fontSize: '20px' }}>수수료 금액</span>
                을 확인해주세요.
                </p>
            <div className="page8-main-page" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <TransparentBox />
            </div>
        </div>
    </div>
  );
}
export default Page8;
