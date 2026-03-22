import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../../scss/main.scss';
import { ThemeProvider } from "@/context/ThemeContext";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import { TropixUiProvider } from "@/context/TropixUiProvider";
//import Head from "next/head";


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

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages({locale: params.locale});

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <TropixUiProvider>
            <GlobalStateProvider>
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </GlobalStateProvider>
          </TropixUiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
