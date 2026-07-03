"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../lib/translations";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("pt");

  // recupera preferência salva (após montar, evita mismatch de hidratação)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "pt") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const value = { lang, setLang, toggle, t: translations[lang] };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang deve ser usado dentro de <LangProvider>");
  return ctx;
}
