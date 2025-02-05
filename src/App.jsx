import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import JsonUploader from "./components/JsonUploader";
import JsonFileList from "./components/JsonFileList";
import { AuthProvider } from "./context/AuthContext";
import EventManagement from "./components/EventManagement";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/upload-json" 
              element={
                <ProtectedRoute>
                  <JsonUploader />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/json-files" 
              element={
                <ProtectedRoute>
                  <JsonFileList />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/event-management" 
              element={
                <ProtectedRoute>
                  <EventManagement />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
