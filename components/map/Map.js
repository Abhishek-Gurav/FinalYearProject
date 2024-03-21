'use client'
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconUrl from '@/public/assets/delhi.webp';

const stateData = [
  {
    id: 1,
    name: 'Delhi',
    lat: 28.7041,
    long: 77.1025,
    pH: [7.2, 7.1, 7.3], // pH values for the past three years
    humidity: [60, 65, 70], // Humidity values for the past three years
    temperature: [25, 26, 24], // Temperature values for the past three years
  },
  // More state data...
];

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize Leaflet map
      mapRef.current = L.map(mapContainerRef.current).setView([20.5937, 78.9629], 5);

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    // Clear existing markers
    mapRef.current.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });

    // Plot data on map
    const customIcon = L.icon({
      iconUrl: customIconUrl.src, // Use the correct path to the custom icon image
      iconSize: [40, 40], // Adjust the size of your custom icon
      iconAnchor: [20, 40], // Adjust the anchor point if needed
    });

    stateData.forEach(state => {
      const { lat, long, name, pH, humidity, temperature } = state;
      const marker = L.marker([lat, long], { icon: customIcon }).addTo(mapRef.current).bindPopup(createPopupContent(name, pH, humidity, temperature));
    });

    return () => {
      // Cleanup map when component unmounts
      mapRef.current.remove();
      mapRef.current = null;
    };
  }, [stateData]);

  const createPopupContent = (name, pH, humidity, temperature) => {
    return `
      <div class="text-left">
        <h3 class="text-lg font-semibold mb-1">${name}</h3>
        <p><strong class="mr-1">pH:</strong> ${pH.join(', ')}</p>
        <p><strong class="mr-1">Humidity:</strong> ${humidity.join(', ')}</p>
        <p><strong class="mr-1">Temperature:</strong> ${temperature.join(', ')}</p>
      </div>
    `;
  };

  return <div ref={mapContainerRef} style={{ height: '500px' }} />;
};

export default Map;
