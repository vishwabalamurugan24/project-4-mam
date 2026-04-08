import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.onload = () => {
      new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default Map;