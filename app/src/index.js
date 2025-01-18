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
import Page9 from './page9';
import Page10 from './page10';
import Page11 from './page11'; // Page11 컴포넌트 임포트
import Page12 from './page12';
import Page13 from './page13';
import Page14 from './page14';
import Page15 from './page15';
import Page16 from './page16';
import First from './first';
import Blackcircle from './blackcircle';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<MainPage />} /> {/* MainPage 라우트 추가 */}
        <Route path="/page4" element={<Page4 />} /> 
        <Route path="/idnumber" element={<Idnumber />} /> 
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} /> 
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />

        <Route path="/page10" element={<Page10 />} /> 
        <Route path="/page11" element={<Page11 />} /> 
        <Route path="/page12" element={<Page12 />} /> 
        <Route path="/page13" element={<Page13 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/page16" element={<Page16 />} />

        <Route path="/first" element={<First />} />
        <Route path="/blackcircle" element={<Blackcircle />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
