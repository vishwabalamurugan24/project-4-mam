import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
const socket = io(BACKEND_URL);

const ControlCenterDashboard = () => {
  const [gpsData, setGpsData] = useState(null);

  useEffect(() => {
    socket.on('gpsUpdate', (data) => {
      setGpsData(data);
    });

    return () => socket.off('gpsUpdate');
  }, []);

  return (
    <div>
      <h1>Control Center Dashboard</h1>
      {gpsData ? (
        <p>Ambulance Location: Latitude {gpsData.latitude}, Longitude {gpsData.longitude}</p>
      ) : (
        <p>Waiting for GPS data...</p>
      )}
    </div>
  );
};

export default ControlCenterDashboard;