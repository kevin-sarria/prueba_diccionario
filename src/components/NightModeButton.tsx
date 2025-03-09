"use client"
import { useTheme } from "@/hooks/useTheme";

export const NightModeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const handleDarkMode = () => {
    toggleTheme();
  }

  return (
    <div className="flex items-center gap-3">

        <div
          className={`w-12 h-fit p-1 rounded-4xl cursor-pointer flex transition-all duration-300 ${ theme == 'dark' ? 'pl-7 bg-sky-600' : 'pl-1 bg-gray-500' }`}
          onClick={handleDarkMode}
          >
          <div className="rounded-full w-4 h-4 bg-white"></div>
        </div>

        <div className="w-6 h-6">
          <img src="/icons/icon-moon.png" alt="Icon Moon" />
        </div>
    </div>
  )
}
