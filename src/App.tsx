// src/App.tsx
import { useState, useEffect } from "react";
import DesktopLayout from "./components/Desktop/DesktopLayout";
import MobileLayout from "./components/Mobile/MobileLayout";

import { HOSTNAME } from "./constant/hostname";

function App() {
  // State untuk toggle koneksi dan dark mode
  const [isConnected, setIsConnected] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // URL backend untuk Socket.IO
  const socketUrl = `http://${HOSTNAME}:3000`;

  // Efek dark mode: menambahkan/menghapus class 'dark' di <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Layout Desktop/Tablet (md ke atas) */}
      <DesktopLayout
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        socketUrl={socketUrl}
      />

      {/* Layout Mobile (di bawah md) */}
      <MobileLayout
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        socketUrl={socketUrl}
      />
    </>
  );
}

export default App;
