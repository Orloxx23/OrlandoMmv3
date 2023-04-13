import "@/styles/globals.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";

import global_en from "@/languagues/en/global.json";
import global_es from "@/languagues/es/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <I18nextProvider i18n={i18next}>
        <div className="noise"></div>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  );
}
