
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={" "}>
        <Head>
          <meta
            name="keywords"
            content="Satire, silicon, AI, blog"
          />
          <meta name="theme-color" content="#0FA5E9" />

          <meta name="application-name" content="Satirical Silicon" />

          {/*Add to homescreen for Chrome on Android --> */}
          <meta name="mobile-web-app-capable" content="yes" />

          {/* Add to homescreen for Safari on iOS --> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@FieroTy" />
          <meta name="twitter:title" content="Satirical Silicon" />
          <meta
            name="twitter:description"
            content="A satirical take on the tech industry"
          />
          <meta name="twitter:image" content="./assets/og.png" />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Satirical Silicon" />
          <meta
            property="og:description"
            content="A satirical take on the tech industry."
          />
          <meta property="og:image" content="./assets/og.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
        

          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="apple-mobile-web-app-title" content="Satirical Silicon" />

          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

          <meta property="og:image" content={"./assets/og.png"} />
      
        </Head>
        <body className="transition duration-500 bg-white dark:bg-slate-800 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
