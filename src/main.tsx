import { createRoot } from 'react-dom/client';
import App from './pages/index.tsx';
import '@/shared/styles/index.scss';

createRoot(document.getElementById('root')!).render(<App />);
