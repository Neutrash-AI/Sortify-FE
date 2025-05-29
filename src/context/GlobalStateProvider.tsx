import { useState, useEffect, ReactNode } from "react";

import { HOSTNAME } from "../constant/hostname";

// New context
import { GlobalStateContext } from "./useGlobalState";

import { io } from "socket.io-client";

// New provider
interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  // State untuk toggle koneksi dan dark mode
  const [isConnected, setIsConnected] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);

  const [totalCount, setTotalCount] = useState(0);
  const [organicCount, setOrganicCount] = useState(0);
  const [recycleCount, setRecycleCount] = useState(0);

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

  //
  useEffect(() => {
    const socket = io(socketUrl, { transports: ["websocket"] });

    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on(
      "camera_frames",
      (data: { detections?: { label: string; confidence: number }[] }) => {
        const det = data.detections?.[0];
        // only update if detection exists and confidence > 0.9
        if (!det || det.confidence <= 0.9) return;

        // increment total
        setTotalCount((c) => c + 1);

        // increment by label
        if (det.label === "Organic") {
          setOrganicCount((c) => c + 1);
        } else if (det.label === "Recycle") {
          setRecycleCount((c) => c + 1);
        }
      }
    );

    return () => {
      socket.disconnect();
    };
  }, [socketUrl]);

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
        totalCount,
        organicCount,
        recycleCount,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
