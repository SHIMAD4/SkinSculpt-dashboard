import { createRoot } from 'react-dom/client';
import App from '../pages';
import { Provider } from 'react-redux';
import store from '@/shared/lib/store/index.tsx';
import '@/shared/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
