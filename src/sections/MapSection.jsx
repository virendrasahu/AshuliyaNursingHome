import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Map as MapIcon, RotateCcw } from 'lucide-react';

// IMPORTANT: Replace with your actual Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zaGFuc2FodSIsImEiOiJjbTlpNGlscmUwYnU2MmtyMHhhcDNuNjdrIn0.KVNKM0lO4L2TNUboY2pTYg';

const SERVICE_LOCATION = [85.344994, 23.353805]; // [lng, lat] updated per user request

const MapSection = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [mapError, setMapError] = useState(null);

    // Calculate distance between two points in km (Haversine formula)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c).toFixed(1);
    };

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setLoadingLocation(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setUserLocation([longitude, latitude]);
                const dist = calculateDistance(latitude, longitude, SERVICE_LOCATION[1], SERVICE_LOCATION[0]);
                setDistance(dist);
                setLoadingLocation(false);

                if (mapRef.current) {
                    // Add current location marker
                    const el = document.createElement('div');
                    el.className = 'user-marker';

                    new mapboxgl.Marker({ element: el })
                        .setLngLat([longitude, latitude])
                        .setPopup(new mapboxgl.Popup().setHTML('<b>Your Location</b>'))
                        .addTo(mapRef.current);

                    // Fit map to show both points
                    const bounds = new mapboxgl.LngLatBounds()
                        .extend(SERVICE_LOCATION)
                        .extend([longitude, latitude]);

                    mapRef.current.fitBounds(bounds, { padding: 80 });
                }
            },
            (error) => {
                console.error("Error getting location:", error);
                setLoadingLocation(false);
                alert("Unable to retrieve your location. Please check your browser permissions.");
            }
        );
    };

    const openDirections = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${SERVICE_LOCATION[1]},${SERVICE_LOCATION[0]}`;
        window.open(url, '_blank');
    };

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        try {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/light-v11',
                center: SERVICE_LOCATION,
                zoom: 14,
                scrollZoom: false,
            });

            mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

            mapRef.current.on('load', () => {
                mapRef.current.resize();
            });

            // Service Location Marker
            const el = document.createElement('div');
            el.className = 'custom-marker';

            new mapboxgl.Marker({ element: el })
                .setLngLat(SERVICE_LOCATION)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 })
                        .setHTML(`
                            <div style="padding: 5px;">
                                <h3 style="margin: 0 0 5px; font-size: 1rem; color: #1E293B;">Ashuliya Home Nursing</h3>
                                <p style="margin: 0; font-size: 0.85rem; color: #64748B;">Surya Colony, Ranchi</p>
                            </div>
                        `)
                )
                .addTo(mapRef.current);

        } catch (err) {
            console.error('Failed to initialize map:', err);
            setMapError(err.message);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <section id="location" style={{ padding: '100px 20px', background: '#FAFAFA', position: 'relative' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our <span className="text-gradient">Location</span></h2>
                        <p style={{ color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Providing compassionate home nursing care throughout Ranchi. Find out how far we are from you!
                        </p>
                    </motion.div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            position: 'relative',
                            height: '500px',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '12px solid white',
                            background: '#F1F5F9'
                        }}
                    >
                        <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />

                        {/* Overlay Controls */}
                        <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleGetLocation}
                                disabled={loadingLocation}
                                style={{
                                    background: 'white',
                                    border: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: 600,
                                    color: 'var(--primary)',
                                    cursor: 'pointer'
                                }}
                            >
                                <Navigation size={18} className={loadingLocation ? "animate-spin" : ""} />
                                {loadingLocation ? "Locating..." : "Find My Distance"}
                            </motion.button>

                            <AnimatePresence>
                                {distance && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        style={{
                                            background: 'var(--primary)',
                                            color: 'white',
                                            padding: '12px 20px',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <MapIcon size={18} />
                                        {distance} km away
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={openDirections}
                                style={{
                                    background: '#0F172A',
                                    color: 'white',
                                    padding: '14px 32px',
                                    borderRadius: '100px',
                                    border: 'none',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Navigation size={20} fill="white" />
                                Get Detailed Directions
                            </motion.button>
                        </div>

                        {mapError && (
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.9)',
                                padding: '20px',
                                textAlign: 'center'
                            }}>
                                <p style={{ color: '#EF4444' }}>Unable to load map. Please check your connection or Mapbox token.</p>
                            </div>
                        )}
                    </div>
                </div>

                <div style={{
                    marginTop: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '60px',
                    flexWrap: 'wrap',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Visit Us</h4>
                        <p style={{ color: '#64748B', lineHeight: '1.6' }}>Surya Colony Near Oxford Public <br /> School, Ranchi, Jharkhand</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Support</h4>
                        <p style={{ color: '#64748B', lineHeight: '1.6' }}>Available 24/7 for <br /> Emergency Inquiries</p>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .custom-marker {
                    background-image: url('https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png');
                    background-size: cover;
                    width: 48px;
                    height: 48px;
                    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
                    cursor: pointer;
                    transition: transform 0.2s ease;
                }
                .user-marker {
                    background: #3B82F6;
                    width: 20px;
                    height: 20px;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
                    cursor: pointer;
                }
                .custom-marker:hover {
                    transform: scale(1.1);
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .mapboxgl-popup-content {
                    border-radius: 16px;
                    padding: 12px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
                    border: 1px solid #F1F5F9;
                }
            `}</style>
        </section>
    );
};

export default MapSection;
