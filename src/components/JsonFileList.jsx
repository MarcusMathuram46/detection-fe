import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../style/JsonFileList.css"; // Custom CSS for styling

const JsonFileList = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/json-files").then((res) => {
      setFiles(res.data.files);
    });
  }, []);

  const handleFileClick = async (fileName) => {
    setSelectedFile(fileName);
    const res = await axios.get(`http://localhost:3000/json-files/${fileName}`);
    setFileContent(JSON.stringify(res.data, null, 2));
  };

  return (
    <motion.div
      className="json-file-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Uploaded JSON Files</h2>
      <ul>
        {files.map((file, index) => (
          <motion.li
            key={index}
            onClick={() => handleFileClick(file)}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {file}
          </motion.li>
        ))}
      </ul>

      {selectedFile && (
        <div className="file-content">
          <h3>File: {selectedFile}</h3>
          <pre>{fileContent}</pre>
        </div>
      )}
    </motion.div>
  );
};

export default JsonFileList;
