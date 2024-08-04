import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.scss';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';



const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
