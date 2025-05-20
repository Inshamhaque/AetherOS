import {
  Maximize,
  Minimize,
  UploadCloud,
  Github,
  UserCircle,
} from "lucide-react";

export default function Navbar({
  isFullscreen,
  toggleFullscreen,
}: {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}) {
  return (
    <div className="flex justify-between items-center m-3">
      <div
        onClick={() => {
          /* settings */
        }}
      >
        <UploadCloud className="h-8 w-8 text-gray-300 cursor-pointer" />
      </div>

      <div className="flex items-center space-x-4">
        <div onClick={toggleFullscreen} className="cursor-pointer">
          {isFullscreen ? (
            <Minimize className="h-4 w-4 text-gray-300 hover:text-white" />
          ) : (
            <Maximize className="h-4 w-4 text-gray-300 hover:text-white" />
          )}
        </div>

        <a
          href="https://github.com/Inshamhaque/AetherOS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-4 w-4 text-gray-300 hover:text-white" />
        </a>
        <DateComponent />
        <UserCircle className="h-4 w-4 hover:text-white hover:cursor-pointer" />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

function DateComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="text-sm cursor rounded-xl px-2 py-1 text-white">
      {formatted}
    </div>
  );
}
