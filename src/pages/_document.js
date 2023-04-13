import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="" lang="en">
      <Head>
        <script
          src="https://kit.fontawesome.com/00a734f883.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="bg-[#f8efff] dark:bg-[#09030e]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
