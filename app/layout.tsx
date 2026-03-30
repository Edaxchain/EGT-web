import Navbar from "@/app/_components/layout/Navbar";
import Footer from "@/app/_components/layout/Footer";
import { ThemeProvider } from "@/app/_contexts/ThemeProvider";
import type { Metadata } from "next";
//import Footer from "@/app/_components/layout/Footer";
//import { ThemeProvider } from "@/app/_contexts/ThemeProvider";
//import { WalletContextProvider } from "@/app/contexts/WalletContextProvider";
//import { NextIntlClientProvider } from "next-intl";
//import { getMessages } from "next-intl/server";
import "./globals.css";
import { Prompt } from 'next/font/google'

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-prompt',
});
export const metadata: Metadata = {
  title: "Energy Trutol",
  description: "นวัตกรรมด้านพลังงานเพื่อการเชื่อมต่อที่ยั่งยืน",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
        <html lang="th" className={prompt.variable} suppressHydrationWarning>
            <body>
            
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                      {/*
                <NextIntlClientProvider messages={messages}>
                    <WalletContextProvider>
                    */}
                    <Navbar />

                    <main>{children}</main>

                    <Footer />
                    {/*
                    </WalletContextProvider>
                </NextIntlClientProvider>
                 */}
                </ThemeProvider>
               
            </body>
        </html>
    );
}
