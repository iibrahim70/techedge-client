"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 bg-white text-black py-1 px-2 rounded-xl">
      <small className="font-semibold">
        {theme === "light" ? "Dark" : "Light"}
      </small>

      <button
        onClick={toggleTheme}
        className="text-2xl antialiased text-yellow"
      >
        {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
