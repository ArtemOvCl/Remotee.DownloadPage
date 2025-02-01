import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Заміни на .tsx, якщо App — це компонент TypeScript

const rootElement = document.getElementById('root') as HTMLElement; // типізація елементу

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

