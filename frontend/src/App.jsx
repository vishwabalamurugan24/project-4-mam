import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import AmbulanceDashboard from './pages/AmbulanceDashboard';
import Reports from './pages/Reports';
import TrafficManagement from './pages/TrafficManagement';
import LiveTracking from './pages/LiveTracking';
import HelpCenter from './pages/HelpCenter';
import Settings from './pages/Settings';
import Registration from './pages/Registration';
import DriverAlert from './pages/DriverAlert';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/alert" element={<DriverAlert />} />

        {/* Dashboard Layout Pages */}
        <Route 
          path="/dashboard" 
          element={<MainLayout><AmbulanceDashboard /></MainLayout>} 
        />
        <Route 
          path="/radar" 
          element={<MainLayout><TrafficManagement /></MainLayout>} 
        />
        <Route 
          path="/reports" 
          element={<MainLayout><Reports /></MainLayout>} 
        />
        <Route 
          path="/fleet" 
          element={<MainLayout><LiveTracking /></MainLayout>} 
        />
        <Route 
          path="/support" 
          element={<MainLayout><HelpCenter /></MainLayout>} 
        />
        <Route 
          path="/settings" 
          element={<MainLayout><Settings /></MainLayout>} 
        />
        
        {/* Default redirect can be added if needed */}
      </Routes>
    </Router>
  );
}

export default App;
