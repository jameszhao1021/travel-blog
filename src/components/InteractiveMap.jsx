// import { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import PropTypes from "prop-types";
// import axios from 'axios';
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "./InteractiveMap.css";

// mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOXAPI;

// const InteractiveMap = ({ markedCountries }) => {
//   // Reference for the map container element
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   const [countryData, setCountryData] = useState([]);
//   useEffect(() => {
//     // Fetch list of countries from the API
//     async function fetchCountries(){
//       try {
//         const response = await axios.get('https://restcountries.com/v3.1/all');
//         const countryOptions = response.data.map(country => ({
//           name: country.name.common,
//           latlng: country.latlng
//         }));

//         setCountryData(countryOptions);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     }

//     fetchCountries();
//   }, [setCountryData])

//   // Initialize map when component mounts
//   useEffect(() => {
//     // Initialize map instance
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11", // Map style URL
//       center: [0, 20], // starting position [lng, lat]
//       zoom: 1.2, // starting zoom
//     });

//     map.current.addControl(new mapboxgl.NavigationControl());

//     map.current.on("style.load", () => {
//       map.current.setFog({});
//     });

//     const secondsPerRevolution = 180;
//     const maxSpinZoom = 5;
//     const slowSpinZoom = 3;

//     let userInteracting = false;
//     const spinEnabled = true;

//     function spinGlobe() {
//       const zoom = map.current.getZoom();
//       if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
//         let distancePerSecond = 360 / secondsPerRevolution;
//         if (zoom > slowSpinZoom) {
//           const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
//           distancePerSecond *= zoomDif;
//         }
//         const center = map.current.getCenter();
//         center.lng -= distancePerSecond;
//         map.current.easeTo({ center, duration: 1000, easing: (n) => n });
//       }
//     }

//     map.current.on("mousedown", () => {
//       userInteracting = true;
//     });
//     map.current.on("dragstart", () => {
//       userInteracting = true;
//     });

//     map.current.on("moveend", () => {
//       spinGlobe();
//     });

//     spinGlobe();

//     // Add Mapbox Geocoder control
//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl: mapboxgl,
//       placeholder: "Search for a location",
//     });
//     map.current.addControl(geocoder);

//     // Clean up function to remove map on unmount
//     return () => map.current.remove();
//   }, []);

//   const [markers, setMarkers] = useState([])
//   useEffect(() => {
//     if (map.current === null) return;
//     if (markedCountries.length === 0 || countryData.length === 0) return;

//     const markedLatLngs = markedCountries.map(country => countryData.find(data => data.name === country)?.latlng);

//     const countriesWithMarkers = markedCountries.filter(country => markers.find(marker => [marker.getLngLat().lat, marker.getLngLat().lng].toString() == countryData.find(data => data.name === country)?.latlng.toString()))
//     const countriesWithoutMarkers = markedCountries.filter(country => !countriesWithMarkers.includes(country));
//     const extraMarkers = markers.filter(marker => !markedLatLngs.find(latLng => latLng.toString() == [marker.getLngLat().lat, marker.getLngLat().lng].toString()))
    
    
//     countriesWithoutMarkers.forEach(country => {
//       const countryLatLng = countryData.find(data => data.name === country)?.latlng;
//       const [lat, lng] = countryLatLng;
//       setMarkers(current => ([...current, new mapboxgl.Marker({
//         color: "red",
//         draggable: false,
//       })
//         .setLngLat([lng, lat])
//         .addTo(map.current)]))
//     })

//     // setMarkers(current => current.filter(marker => !extraMarkers.includes(marker)));
//     extraMarkers.forEach(marker => marker.remove())
//   }, [markedCountries, countryData, markers]);

//   return <div ref={mapContainer} className="interactive-map-container" />;
// };

// InteractiveMap.propTypes = {
//   markedCountries: PropTypes.arrayOf(PropTypes.string),
// };

// export default InteractiveMap;

// InteractiveMap.jsx
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import PropTypes from "prop-types";
import axios from 'axios';
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./InteractiveMap.css";

mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOXAPI;

const InteractiveMap = ({ markedCountries }) => {
  // Reference for the map container element
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [countryData, setCountryData] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Fetch list of countries from the API
    async function fetchCountries(){
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryOptions = response.data.map(country => ({
          name: country.name.common,
          latlng: country.latlng
        }));

        setCountryData(countryOptions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    if (map.current === null) return;
    if (markedCountries.length === 0 || countryData.length === 0) return;

    const markedLatLngs = markedCountries.map(country => countryData.find(data => data.name === country)?.latlng);

    // Filter out existing markers for countries that are still marked
    const existingMarkers = markers.filter(marker => {
      const latLng = [marker.getLngLat().lat, marker.getLngLat().lng].toString();
      return markedLatLngs.some(markLatLng => markLatLng?.toString() === latLng);
    });

    // Add new markers for newly marked countries
    const newMarkers = markedCountries
      .filter(country => !markers.some(marker => {
        const latLng = [marker.getLngLat().lat, marker.getLngLat().lng].toString();
        return latLng === countryData.find(data => data.name === country)?.latlng.toString();
      }))
      .map(country => {
        const countryLatLng = countryData.find(data => data.name === country)?.latlng;
        const [lat, lng] = countryLatLng;
        return new mapboxgl.Marker({
          color: "red",
          draggable: false,
        })
          .setLngLat([lng, lat])
          .addTo(map.current);
      });

    // Remove markers for unmarked countries
    const removedMarkers = markers.filter(marker => !existingMarkers.includes(marker));
    removedMarkers.forEach(marker => marker.remove());

    // Update the markers state with existing markers and new markers
    setMarkers(prevMarkers => [...prevMarkers.filter(marker => existingMarkers.includes(marker)), ...newMarkers]);
  }, [markedCountries, countryData]);

  // Initialize map when component mounts
  useEffect(() => {
    // Initialize map instance
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Map style URL
      center: [0, 20], // starting position [lng, lat]
      zoom: 1.2, // starting zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on("style.load", () => {
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

    map.current.on("mousedown", () => {
      userInteracting = true;
    });
    map.current.on("dragstart", () => {
      userInteracting = true;
    });

    map.current.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();

    // Add Mapbox Geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Search for a location",
    });
    map.current.addControl(geocoder);

    // Clean up function to remove map on unmount
    return () => map.current.remove();
  }, []);

  return <div ref={mapContainer} className="interactive-map-container" />;
};

InteractiveMap.propTypes = {
  markedCountries: PropTypes.arrayOf(PropTypes.string),
};

export default InteractiveMap;
