// Home.tsx
import Navbar from "../ui/Navbar";
import TaskBar from "../ui/Taskbar";

export default function Home({
  isFullscreen,
  toggleFullscreen,
}: {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}) {
  return (
    <div className="w-full h-full">
      <Navbar isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
      <TaskBar />
    </div>
  );
}
