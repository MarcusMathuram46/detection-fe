import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../style/JsonUploader.css"; // Custom CSS for styling

const JsonUploader = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("jsonFile", file);

    try {
      const response = await axios.post("http://localhost:3000/upload-json", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <motion.div
      className="json-uploader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Upload JSON File</h2>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </motion.div>
  );
};

export default JsonUploader;
