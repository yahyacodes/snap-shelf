import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import { NextAuthProvider } from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SnapShelf | Easily Share And Find Useful Code Snippets",
  description: "Easily Share And Find Useful Code Snippets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <Navbar />
        </NextAuthProvider>
        {children}
      </body>
    </html>
  );
}
