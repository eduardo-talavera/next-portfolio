
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../../scss/main.scss';
import { ThemeProvider } from "@/context/ThemeContext";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import { TropixUiProvider } from "@/context/TropixUiProvider";


export default async function RootLocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
 
  return (
    <>
      <ThemeProvider>
        <TropixUiProvider>
          <GlobalStateProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </GlobalStateProvider>
        </TropixUiProvider>
      </ThemeProvider>
    </>
  );
}
