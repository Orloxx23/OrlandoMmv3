import "@/styles/globals.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import global_en from "@/languagues/en/global.json";
import global_es from "@/languagues/es/global.json";
import Head from "next/head";
import Script from "next/script";

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
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ThemeProvider attribute="class" enableSystem={true}>
        <I18nextProvider i18n={i18next}>
          <div className="noise"></div>
          <AnimatePresence mode="wait">
            <Head>
              <title>Orlando Mina</title>
              <meta
                name="description"
                content="Orlando Mina personal website"
              />
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
    </>
  );
}
