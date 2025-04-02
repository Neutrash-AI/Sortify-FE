import { useState, useEffect, ReactNode } from "react";

import { HOSTNAME } from "../constant/hostname";

// New context
import { GlobalStateContext } from "./useGlobalState";

// New provider
interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  // State untuk toggle koneksi dan dark mode
  const [isConnected, setIsConnected] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);

  // URL backend untuk Socket.IO
  const socketUrl = `http://${HOSTNAME}:3000`;

  // Saat komponen pertama kali mount, baca dari localStorage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  // Update localStorage setiap kali isDarkMode berubah
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <GlobalStateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isConnected,
        setIsConnected,
        displaySidebar,
        setDisplaySidebar,
        socketUrl,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
