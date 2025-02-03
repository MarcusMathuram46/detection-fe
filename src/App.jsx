import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css"

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import JsonUploader from "./components/JsonUploader";
import JsonFileList from "./components/JsonFileList";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload-json" element={<JsonUploader />} />
          <Route path="/json-files" element={<JsonFileList />} />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
