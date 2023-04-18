import "@/styles/globals.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import global_en from "@/languagues/en/global.json";
import global_es from "@/languagues/es/global.json";
import Head from "next/head";

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

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <I18nextProvider i18n={i18next}>
        <div className="noise"></div>
        <AnimatePresence mode="wait">
          <Head>
            <title>Orlando Mina</title>
            <meta name="description" content="Orlando Mina personal website" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/io.ico" />
          </Head>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </I18nextProvider>
    </ThemeProvider>
  );
}
