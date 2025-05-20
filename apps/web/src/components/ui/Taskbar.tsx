import { Blocks, FolderOpen, Notebook, Code, Trash } from "lucide-react";

export default function TaskBar() {
  return (
    <div
      className="
          fixed
          bottom-6
          left-1/2
          transform
          -translate-x-1/2
          flex
          items-center
          space-x-6
          bg-gray-900/80
          backdrop-blur-lg
          rounded-full
          px-6
          py-3
          shadow-lg
          z-50
        "
    >
      <Blocks className="w-8 h-8 text-blue-500 cursor-pointer hover:scale-130 transition-transform" />
      <FolderOpen className="w-8 h-8 text-yellow-500 cursor-pointer hover:scale-130 transition-transform" />
      <Notebook className="w-8 h-8 text-purple-500 cursor-pointer hover:scale-130 transition-transform" />
      <Code className="w-8 h-8 text-gray-400 cursor-pointer hover:scale-130 transition-transform" />
      <Trash className="w-8 h-8 text-red-400 cursor-pointer hover:scale-130 transition-transform" />
    </div>
  );
}
