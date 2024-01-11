import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import './styles/reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <App />
    </RecoilRoot>
  </React.StrictMode>
);
reportWebVitals();
