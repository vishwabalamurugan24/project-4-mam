import './App.css';
import Map from './components/Map';
import ControlCenterDashboard from './components/ControlCenterDashboard';

function App() {
  const isDashboard = window.location.hash === '#modern-dashboard';

  if (!isDashboard) {
    // If we're on the home page, React stays silent
    return null;
  }

  return (
    <div className="App">
      <Map />
      <ControlCenterDashboard />
    </div>
  );
}

export default App;
