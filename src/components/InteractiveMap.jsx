import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import PropTypes from 'prop-types';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './InteractiveMap.css';

mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOXAPI;

const InteractiveMap = ({ selectedCountry }) => {
  // Reference for the map container element
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    // Initialize map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [0, 20], // starting position [lng, lat]
      zoom: 1.2, // starting zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('style.load', () => {
      map.current.setFog({});
    });

    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    let userInteracting = false;
    const spinEnabled = true;

    function spinGlobe() {
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    map.current.on('dragstart', () => {
      userInteracting = true;
    });

    map.current.on('moveend', () => {
      spinGlobe();
    });

    spinGlobe();

    // Add Mapbox Geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for a location',
    });
    map.current.addControl(geocoder);

    // Clean up function to remove map on unmount
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    console.log(selectedCountry)
    if (map.current === null) return
      // Add marker when selectedCountry changes
      if (selectedCountry && selectedCountry.latlng) {
        const [lat, lng] = selectedCountry.latlng;
        const marker = new mapboxgl.Marker({
        color: 'red',
        draggable: false,
      })
        .setLngLat([lng, lat])
        .addTo(map.current);
    }
   
    }, [selectedCountry]);


  return <div ref={mapContainer} className="interactive-map-container" />;
};

InteractiveMap.propTypes = {
    selectedCountry: PropTypes.shape({
      latlng: PropTypes.arrayOf(PropTypes.number), // Assuming latlng is an array of numbers [lng, lat]
      // Add other properties of selectedCountry if needed
    }),
  };

export default InteractiveMap;
