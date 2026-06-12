import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FaWhatsapp } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradionex | B2B Corporate Export",
  description: "Global excellence in industrial minerals and agricultural export.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />

          <main className="flex-1">{children}</main>

          <a
            href="https://wa.me/971568039829"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-[#fa7719] hover:scale-110 transition-all duration-300">
              <div className="text-white text-3xl">
                <FaWhatsapp />
              </div>
            </div>
          </a>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
