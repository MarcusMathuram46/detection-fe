import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../style/EventManagement.css"; // Ensure this file exists

const API_URL = "http://localhost:5000/api/event-images"; // Update if needed

function EventManagement() {
  const [eventPhotos, setEventPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch event images from backend
  const fetchEventPhotos = async () => {
    try {
      const response = await axios.get(API_URL);
      setEventPhotos(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load images");
      setLoading(false);
    }
  };

  // Fetch images on mount and refresh every 10 seconds
  useEffect(() => {
    fetchEventPhotos();
    const interval = setInterval(fetchEventPhotos, 3000); // Refresh every 10s

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Filter images based on category
  const filteredPhotos =
    selectedCategory === "All"
      ? eventPhotos
      : eventPhotos.filter((photo) => photo.category === selectedCategory);

  // Sort photos so the newest appear first
  const sortedPhotos = [...filteredPhotos].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  // Navigation functions
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sortedPhotos.length - 1 : prevIndex - 1
    );
  };

  const firstPhoto = () => {
    setCurrentIndex(0); // First image (latest)
  };

  const lastPhoto = () => {
    setCurrentIndex(sortedPhotos.length - 1); // Last image (oldest)
  };

  return (
    <motion.div
      className="event-management-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Event Management</h1>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="filter">Filter by Event Type:</label>
        <select
          id="filter"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentIndex(0); // Reset index when changing category
          }}
        >
          <option value="All">All</option>
          <option value="Anomaly Detection">Anomaly Detection</option>
          <option value="Behavior Recognition">Behavior Recognition</option>
          <option value="Event Logging">Event Logging</option>
        </select>
      </div>

      {/* Display Image */}
      {loading ? (
        <p>Loading images...</p>
      ) : error ? (
        <p>{error}</p>
      ) : sortedPhotos.length > 0 ? (
        <motion.div
          className="photo-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`http://localhost:5000${sortedPhotos[currentIndex]?.src}`}
            alt="Event"
            className="event-photo"
          />
          <p>{sortedPhotos[currentIndex]?.description}</p>
        </motion.div>
      ) : (
        <p>No images available for this category.</p>
      )}

      {/* Navigation Buttons */}
      {sortedPhotos.length > 1 && (
        <div className="button-container">
          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={firstPhoto}
            disabled={currentIndex === 0}
          >
            First
          </motion.button>

          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevPhoto}
            disabled={sortedPhotos.length <= 1}
          >
            Previous
          </motion.button>

          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextPhoto}
            disabled={sortedPhotos.length <= 1}
          >
            Next
          </motion.button>

          <motion.button
            className="nav-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={lastPhoto}
            disabled={currentIndex === sortedPhotos.length - 1}
          >
            Last
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

export default EventManagement;
