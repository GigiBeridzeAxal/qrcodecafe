'use client'
import React, { useState, useEffect } from 'react';

const EmployeeLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocation();

    // Clean up the geolocation watcher when the component unmounts
    return () => {
      navigator.geolocation;
    };
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </>
      )}
    </div>
  );
};

export default EmployeeLocation;
