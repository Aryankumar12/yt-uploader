// src/App.jsx
import React from "react";
import { ThemeModeProvider } from "./helper/ThemeContext.jsx";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeModeProvider>
      <Login />
    </ThemeModeProvider>
  );
}

export default App;
