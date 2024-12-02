import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      {/* 시선 추적 */}
      <div style={styles.card}>
        <div style={styles.icon}>
          <span role="img" aria-label="eye" style={styles.emoji}>
            👁️
          </span>
        </div>
        <h2 style={styles.title}>시선 추적</h2>
        <p style={styles.description}>
          시선추적을 사용하시려면 <span style={styles.link}>여기</span>를 보고 깜빡여 주세요
        </p>
      </div>

      {/* 터치 모드 */}
      <div style={styles.card}>
        <div style={styles.icon}>
          <span role="img" aria-label="hand" style={styles.emoji}>
            👆
          </span>
        </div>
        <h2 style={styles.title}>터치 모드</h2>
        <p style={styles.description}>
          터치모드를 이용하시려면 <span style={styles.link}>여기</span>를 클릭해 주세요
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1080px',
    height: '1920px',
    background: 'linear-gradient(to bottom, #d7f3fc, #b5d9f3)',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.1)',
    width: '400px',
    padding: '30px',
    margin: '20px',
  },
  icon: {
    marginBottom: '15px',
  },
  emoji: {
    fontSize: '60px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#ff5722',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default App;
