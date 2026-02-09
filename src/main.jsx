import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Upload from './pages/Upload.jsx';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="upload" element={<Upload />} />
          <Route path="list" element={<h1>This is list page</h1>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
