import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { init } from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS with your public key
init('7boIl4bxFmp7QHPZ2');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);