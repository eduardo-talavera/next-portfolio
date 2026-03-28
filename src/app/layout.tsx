import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio Edgar Eduardo Talavera",
  description: "Portafolio Edgar Eduardo Talavera",
  icons: {
    icon: "/icon.ico", // ruta desde la carpeta /public
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}