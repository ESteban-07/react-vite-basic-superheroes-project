import ReactDOM from 'react-dom/client';
import App from './App';
import { SuperHeroesContextProvider } from './context/SuperHeroesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SuperHeroesContextProvider>
    <App />
  </SuperHeroesContextProvider>
);
