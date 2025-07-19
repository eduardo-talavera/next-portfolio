import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../scss/main.scss';
import { ThemeProvider } from "@/context/ThemeContext";


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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
