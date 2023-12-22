"use client";
import { useTheme } from "next-themes";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useTranslations } from "next-intl";

const ThemeSwitcher = () => {
  const t = useTranslations("Index");
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2 bg-white text-black py-1 px-2 rounded-xl">
      <small className="font-semibold">
        {theme === "light" ? <p>{t("Mode.Dark")}</p> : <p>{t("Mode.Light")}</p>}
      </small>

      <button
        onClick={toggleTheme}
        className="text-2xl antialiased text-primary"
      >
        {theme === "light" ? <BsToggleOff /> : <BsToggleOn />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
