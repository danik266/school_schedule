"use client";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="w-full bg-[#0a1c3a] text-white flex justify-between items-center px-6 py-3 shadow">
      <h1 className="text-lg font-semibold">
        {lang === "ru" ? "Гимназия №10 г.Павлодар" : "Павлодар қ. №10 гимназия"}
      </h1>
      <button
        onClick={toggleLang}
        className="border border-white/60 rounded-full px-3 py-1 text-sm"
      >
        {lang === "ru" ? "KZ" : "RU"}
      </button>
    </header>
  );
}
