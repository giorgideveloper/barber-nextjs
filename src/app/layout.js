import localFont from "next/font/local";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const bpgArialCaps = localFont({
  src: "../fonts/bpg-arial-caps-webfont.woff",
  display: "swap",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="ka" className={bpgArialCaps.className}>
      <head>
        <link rel="canonical" href="/" />
      </head>
      <body>
        {children}
        <Script src="https://lumos-accessibility-widget.vercel.app/dist/lumos-accessibility.umd.js" />
      </body>
    </html>
  );
}
