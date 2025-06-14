import { useContext, createContext } from "react";

// New context
interface GlobalStateContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
  displaySidebar: boolean;
  setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>;
  socketUrl: string;
  totalCount: number;
  organicCount: number;
  recycleCount: number;
}

export const GlobalStateContext = createContext<
  GlobalStateContextType | undefined
>(undefined);

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
