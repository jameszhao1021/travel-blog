import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import './InteractiveMap.css';

const InteractiveMap = () => {
  // Reference for the map container element
  const mapContainer = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    // Mapbox access token
    mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOXAPI

    // Initialize map instance
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 0.7, // starting zoom
      projection: 'globe'
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();

    map.on('style.load', () => {
      map.setFog({});
    });

    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    let userInteracting = false;
    const spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.on('mousedown', () => {
      userInteracting = true;
    });
    map.on('dragstart', () => {
      userInteracting = true;
    });

    map.on('moveend', () => {
      spinGlobe();
    });

    spinGlobe();

    // Clean up function to remove map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="interactive-map-container" />;
};

export default InteractiveMap;