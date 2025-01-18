import React from 'react';
import './page10.css'; // 정확한 CSS 파일 경로

function Page10() {
  const services = [
    { name: '주민등록', price: '무료' },
    { name: '지적, 토지, 건축', price: '다음화면' },
    { name: '차량', price: '다음화면' },
    { name: '보건복지', price: '무료' },
    { name: '농지대장', price: '다음화면' },
    { name: '가족관계등록부', price: '500원' },
    { name: '제적부', price: '500원 / 300원' },
    { name: '병적증명서', price: '무료' },
    { name: '지방세', price: '다음화면' },
    { name: '어선원부', price: '800원' },
    { name: '교육제증명', price: '무료' },
    { name: '국세증명', price: '무료' },
    { name: '건강보험', price: '무료' },
    { name: '고용, 산재보험', price: '무료' },
    { name: '여권', price: '무료' },
    { name: '국민연금', price: '무료' },
  ];

  return (
    <div className="Page10">
      <header className="App-header">
        {/* 발급을 원하시는 증명서 선택 텍스트 */}
        <div className="header-text">
        <h1 style={{ color: '#2e3d86' }}>발급을 원하시는 <span style={{ color: '#d94925' }}>
        증명서를 선택</span>하세요</h1> </div>
        <div className='box-style'>
            
                <div className="app-container">
                

                        {/* 카드들 */}
                        <div className="card-container">
                            {services.map((service, index) => (
                            <div   div key={index} className="page10service-card">
                                <h3 className="service-title">{service.name}</h3>
                                <p className="service-price">{service.price}</p>
                            </div>
                            ))}
                        </div>
                </div>
        </div>

          {/* 추가적인 내용 - 카드 아래 */}
          <div className="footer-text">
            <p>각 증명서에 대한 상세 정보는 클릭 후 확인 가능합니다.</p>
          </div>
      </header>
    </div>
  );
}

export default Page10;
