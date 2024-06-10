import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './context/books';
import App from './App.jsx';
import './index.css';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
