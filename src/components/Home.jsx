import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Home.css"; // Updated CSS for styling

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1>AI-Based Virtual Patrol</h1>

      <div className="main-content">
        {/* Image Section */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://i.postimg.cc/6QRdhmHY/ai-virtual-patrol-png.webp" 
            alt="AI-Based Virtual Patrol" 
            className="ai-image" 
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="content-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            AI-Based Virtual Patrol leverages advanced artificial intelligence to enhance security 
            and surveillance operations. This system integrates real-time video analytics, object detection, 
            and behavior recognition to monitor and manage safety in designated areas.
          </p>
          <p>
            The solution offers proactive threat detection, automated alerts, and detailed reporting 
            to support security teams in making informed decisions. With seamless integration capabilities, 
            AI Virtual Patrol is suitable for various environments, including public spaces, industrial sites, 
            and private properties.
          </p>
          <p>
            It integrates object detection (YOLO), behavior recognition algorithms, and anomaly detection 
            to identify potential threats. The system offers automatic event tracking, threat classification, 
            and adaptive learning to enhance security. By leveraging AI, it minimizes human intervention, 
            ensures efficient monitoring, and provides real-time data insights for actionable security 
            decisions.
          </p>
          <p>
            This makes it ideal for deployment in dynamic, resource-constrained environments such as 
            public spaces and private properties.
          </p>
        </motion.div>
      </div>

      {/* Navigation Links */}
      <motion.div
        className="buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/register" className="btn btn-secondary">Register</Link>
        <Link to="/upload-json" className="btn btn-info">Upload JSON</Link>
        <Link to="/json-files" className="btn btn-success">View JSON Files</Link>
        <Link to="/event-management" className="btn btn-danger">Event Management</Link>
      </motion.div>
    </motion.div>
  );
}

export default Home;
