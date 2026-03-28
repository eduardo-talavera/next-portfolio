import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../../scss/main.scss';
import { ThemeProvider } from "@/context/ThemeContext";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import { TropixUiProvider } from "@/context/TropixUiProvider";


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
  const { locale } = await params;
  const messages = await getMessages({locale: locale});
 
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable}`}>
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
