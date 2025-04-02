// src/App.tsx
import DesktopLayout from "./components/Desktop/DesktopLayout";
import MobileLayout from "./components/Mobile/MobileLayout";

function App() {
  return (
    <>
      {/* Layout Desktop/Tablet (md ke atas) */}
      <DesktopLayout />

      {/* Layout Mobile (di bawah md) */}
      <MobileLayout />
    </>
  );
}

export default App;
