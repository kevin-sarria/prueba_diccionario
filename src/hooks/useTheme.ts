"use client"
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
console.log(window.matchMedia("(prefers-color-scheme: dark)"));

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Detectar el tema del sistema o usar el almacenado
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme: Theme = storedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(defaultTheme);
    document.documentElement.classList.toggle("dark", defaultTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}