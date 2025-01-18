import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MainPage from './mainpage'; 
import Page4 from './page4'; // Page4 컴포넌트 임포트
import Idnumber from './idnumber'; 
import Page6 from './page6'; // Page6 컴포넌트 임포트
import Page7 from './page7';
import Page8 from './page8';
import Page10 from './page10';
import Page11 from './page11'; // Page11 컴포넌트 임포트
import Page12 from './page12';
import Page13 from './page13';
import Page14 from './page14';
import Page15 from './page15';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<MainPage />} /> {/* MainPage 라우트 추가 */}
        <Route path="/page4" element={<Page4 />} /> {/* page4 라우트 추가 */}
        <Route path="/idnumber" element={<Idnumber />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page6" element={<Page6 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page7" element={<Page7 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page8" element={<Page8 />} /> {/* Idnumber 라우트 추가 */}

        <Route path="/page10" element={<Page10 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page11" element={<Page11 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page12" element={<Page12 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page13" element={<Page13 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page14" element={<Page14 />} /> {/* Idnumber 라우트 추가 */}
        <Route path="/page15" element={<Page15 />} /> {/* Idnumber 라우트 추가 */}


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
