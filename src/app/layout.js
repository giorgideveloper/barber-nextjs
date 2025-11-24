import localFont from "next/font/local";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { headers } from "next/headers";

const bpgArialCaps = localFont({
  src: "../fonts/bpg-arial-caps-webfont.woff",
  display: "swap",
});

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "https";
  const pathname = headersList.get("x-current-path") || "/";
  const canonical = `${protocol}://${host}${pathname}`;

  return (
    <html lang="ka" className={bpgArialCaps.className}>
      <head>
        <meta name="theme-color" content="#70492E" />
        <meta name="msapplication-TileColor" content="#70492E" />
        <link rel="shortcut icon" href="/barber.png" type="image/x-icon" />
        <link rel="canonical" href={canonical} />
      </head>
      <body>
        {children}
        <Script src="https://lumos-accessibility-widget.vercel.app/dist/lumos-accessibility.umd.js" />
      </body>
    </html>
  );
}
