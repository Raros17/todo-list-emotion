import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import './styles/reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
