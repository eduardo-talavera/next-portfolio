import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../scss/main.scss';
import { ThemeProvider } from "@/context/ThemeContext";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Edgar Eduardo Talavera",
  description: "Portafolio Edgar Eduardo Talavera",
  icons: {
    icon: "/icon.ico", // ruta desde la carpeta /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
         <link
          rel="preload"
          as="image"
          href="/city-day.webp"
        />
         <link
          rel="preload"
          as="image"
          href="/city-night-2.webp"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <GlobalStateProvider>
             {children}
          </GlobalStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
