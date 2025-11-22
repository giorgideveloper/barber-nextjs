import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const bpgFont = localFont({
  src: "../fonts/bpg-arial-caps-webfont.woff",
  variable: "--font-bpg",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={bpgFont.className}>
      <body>{children}</body>
    </html>
  );
}
