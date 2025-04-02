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
    <GlobalStateContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        isConnected,
        setIsConnected,
        socketUrl,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
