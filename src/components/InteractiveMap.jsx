import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import './InteractiveMap.css';

const InteractiveMap = () => {
  // Reference for the map container element
  const mapContainer = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    // Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFuamFuc3plbiIsImEiOiJjbHRnb2hzN3oxMHJhMmtvMzBhMmhudDk5In0.a0BW_3DBloyNqu-OOBR5FA';
    // mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOXAPI


    // Initialize map instance
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [0, 0], // starting position [lng, lat]
      zoom: 1 // starting zoom
    });

    // Clean up function to remove map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="interactive-map-container" />;
};

export default InteractiveMap;