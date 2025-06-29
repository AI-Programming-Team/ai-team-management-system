import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamDashboard from './pages/TeamDashboard';  // or your main App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamDashboard />  {/* or <App /> if you have an App component */}
  </React.StrictMode>
);
