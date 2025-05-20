import { useCallback, useState } from "react";

export function useFullscreen(targetRef: React.RefObject<HTMLElement> | null) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    const element = targetRef.current;

    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen?.().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false));
    }
  }, [targetRef]);

  return { isFullscreen, toggleFullscreen };
}
