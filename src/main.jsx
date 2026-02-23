import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Upload from './pages/Upload.jsx';
import { ThemeModeProvider } from './helper/ThemeContext.jsx'; // Import this!

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId = "281298428519-8cls1sjr4698jm3p97cbu3ktk58o6lco.apps.googleusercontent.com">
    <ThemeModeProvider> 
      <Toaster/>
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
    </ThemeModeProvider>
    </GoogleOAuthProvider>
);