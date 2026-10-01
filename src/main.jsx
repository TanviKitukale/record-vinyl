import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CrateProvider } from './context/CrateContext.jsx';
import './index.css';

// The nesting order here matters:
// BrowserRouter — makes routing (useNavigate, <Link>, useParams...) available
//   CrateProvider — makes the crate state available to every page/component
//     App — the actual UI, including the routes themselves
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CrateProvider>
        <App />
      </CrateProvider>
    </BrowserRouter>
  </StrictMode>
);
