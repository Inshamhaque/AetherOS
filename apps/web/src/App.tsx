// App.tsx
import { useRef } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { useFullscreen } from "./hooks/useFullScreen"; // adjust path if needed

function App() {
  const screenRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = useFullscreen(screenRef);

  return (
    <div ref={screenRef} className="w-full h-full text-white">
      <Home isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
    </div>
  );
}

export default App;
