import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Playground } from './playground/Playground';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
